const express = require("express");
const router = express.Router();
const { error500, error400, error403 } = require("../util/res");
const verifyToken = require("../middleware/auth");
const { firebase } = require("../initFirebase");
const e = require("express");

let messagesRef = firebase.database().ref();

// NEW EDIT

// router.post("", async (req, res, next) => {
//   try {
//     const { token, alllinkphim } = req.body;
//     firebase
//       .auth()
//       .verifyIdToken(token)
//       .then(async function (decodedToken) {
//         if (!!decodedToken.admin) {
//           console.log(alllinkphim);
//           messagesRef.child("/linkphim").push(alllinkphim);
//           //
//           res.send("ok");
//         } else return error403(res);
//       })
//       .catch((error) => {
//         console.log(error);
//         return error500(res);
//       });
//   } catch (error) {
//     return error500(res);
//   }
// });
router.get("/all", async (req, res) => {
  try {
    const id = req.params.id;
    if (req.headers.authorization == "not") {
      return error403(res);
    } else {
      firebase
        .auth()
        .verifyIdToken(req.headers.authorization)
        .then(async function (decodedToken) {
          messagesRef
            .child("linkphim")
            .orderByChild("_id")
            .get()
            .then((snap) => {
              res.send(snap.val());
            })
            .catch((error) => {
              console.log(error);
              return error500(res);
            });
        })
        .catch((e) => {
          return error403(res);
        });
    }
  } catch (error) {
    console.log(error);
    return error500(res);
  }
});

router.get("/alllink/:id", async (req, res) => {
  try {
    const id = req.params.id;
    if (req.headers.authorization == "not") {
      messagesRef
        .child("linkphim")
        .orderByChild("_id")
        .equalTo(parseInt(id))
        .get()
        .then((snap) => {
          if (snap.val() == null) res.send("null");
          else {
            let hold = Object.values(snap.val())[0];
            hold.data.vip = [];
            res.send(hold);
          }
        })
        .catch((error) => {
          console.log(error);
          return error500(res);
        });
    } else {
      firebase
        .auth()
        .verifyIdToken(req.headers.authorization)
        .then(async function (decodedToken) {
          messagesRef
            .child("linkphim")
            .orderByChild("_id")
            .equalTo(parseInt(id))
            .get()
            .then(async (snap) => {
              if (snap.val() == null) res.send("null");
              const info = await getInfoByMail(res, decodedToken.email);
              if (
                !decodedToken.admin &&
                (info.unlockFilm == undefined ||
                  info.unlockFilm[id] == undefined ||
                  info.unlockFilm[id].end < Date.now())
              ) {
                let hold = Object.values(snap.val())[0];
                hold.data.vip = [];
                res.send(hold);
              } else
                res.send({
                  ...Object.values(snap.val())[0],
                  key: Object.keys(snap.val())[0],
                });
            })
            .catch((error) => {
              console.log(error);
              return error500(res);
            });
        })
        .catch((e) => {
          console.log(e);
          return error403(res);
        });
    }
  } catch (error) {
    console.log(error);
    return error500(res);
  }
});

router.put("", async (req, res) => {
  try {
    const linkphim = req.body.linkphim;
    const key = linkphim.key;
    console.log(linkphim);
    console.log(key);
    delete linkphim.key;

    firebase
      .auth()
      .verifyIdToken(req.headers.authorization)
      .then(async function (decodedToken) {
        if (!!decodedToken.admin) {
          if (key === undefined) {
            messagesRef
              .child("linkphim")
              .push(linkphim)
              .then(() => {
                res.send("ok");
              })
              .catch((error) => {
                console.log(error);
                return error500(res);
              });
          } else {
            messagesRef
              .child("linkphim/" + key)
              .update(linkphim)
              .then(() => {
                res.send("ok");
              })
              .catch((error) => {
                console.log(error);
                return error500(res);
              });
          }
        } else return error403(res);
      })
      .catch((e) => {
        return error403(res);
      });
  } catch (error) {
    console.log(error);
    return error500(res);
  }
});
// END NEW

async function getInfoByMail(res, email) {
  try {
    let info = await messagesRef
      .child("users")
      .orderByChild("email")
      .equalTo(email)
      .once("value");
    return Object.values(info.val())[0];
  } catch (e) {
    return error500(res);
  }
}

router.post("/vip", async (req, res, next) => {
  try {
    const { token, fid } = req.body;
    firebase
      .auth()
      .verifyIdToken(token)
      .then(async function (decodedToken) {
        const info = await getInfoByMail(res, decodedToken.email);
        const search = await messagesRef
          .child("phimlink")
          .orderByChild("film_id")
          .equalTo(parseInt(fid))
          .once("value");
        if (search.val() == null) return res.send("null");

        let resulf = new Array();
        if (
          info.unlockFilm == undefined ||
          info.unlockFilm[fid] == undefined ||
          info.unlockFilm[fid].end < Date.now()
        )
          Object.values(search.val()).forEach((e, i) => {
            if (e.vip != true) resulf[i] = e;
            else {
              e.link = "vip only";
              resulf[i] = e;
            }
          });
        else {
          Object.values(search.val()).forEach((e, i) => (resulf[i] = e));
        }
        return res.json(resulf);
      })
      .catch((e) => {
        console.log(e);
        return error403(res);
      });
  } catch (error) {
    return error500(res);
  }
});

router.post("/vip2", async (req, res, next) => {
  try {
    const { token, fid } = req.body;
    firebase
      .auth()
      .verifyIdToken(token)
      .then(async function (decodedToken) {
        console.log(decodedToken.admin);
        const info = await getInfoByMail(res, decodedToken.email);
        if (
          (info.unlockFilm == undefined ||
            info.unlockFilm[fid] == undefined ||
            info.unlockFilm[fid].end < Date.now()) &&
          !decodedToken.admin
        )
          // send link defaul
          messagesRef
            .child("phimlinkdefaul")
            .orderByChild("film_id")
            .equalTo(parseInt(fid))
            .get()
            .then((res1) => {
              res.send(Object.values(res1.val()));
            })
            .catch((e) => console.log(e));
        else {
          // send link vip (merger defaul and vip)
          messagesRef
            .child("phimlinkvip")
            .orderByChild("film_id")
            .equalTo(parseInt(fid))
            .get()
            .then((res1) => {
              messagesRef
                .child("phimlinkdefaul")
                .orderByChild("film_id")
                .equalTo(parseInt(fid))
                .get()
                .then((res2) => {
                  let a = res1.val();
                  let b = res2.val();
                  let linkthuong = [];
                  let linkvip = [];
                  let returnThis;
                  linkthuong = Object.values(b);
                  linkvip = Object.values(a);
                  if (Object.keys(b).length > Object.keys(a).length) {
                    linkthuong.map((e, i) => {
                      linkvip.map((r, j) => {
                        if (r.chap === e.chap)
                          linkthuong[i].link[Object.keys(linkvip[j].link)] =
                            Object.values(linkvip[j].link)[0];
                      });
                    });
                    returnThis = linkthuong;
                  } else {
                    linkvip.map((r, j) => {
                      linkthuong.map((e, i) => {
                        if (r.chap === e.chap) {
                          linkvip[j].link = {
                            ...linkvip[j].link,
                            ...linkthuong[i].link,
                          };
                          let holdSub;
                          holdSub = linkthuong[i].sub;
                          linkvip[j].sub = holdSub;
                        }
                      });
                    });
                    returnThis = linkvip;
                  }
                  res.send(returnThis);
                })
                .catch((e) => console.log(e));
            })
            .catch((e) => console.log(e));
        }
      })
      .catch((e) => {
        console.log(e);
        return error403(res);
      });
  } catch (error) {
    return error500(res);
  }
});

router.post("/vip3", async (req, res, next) => {
  try {
    const { token, fid } = req.body;
    firebase
      .auth()
      .verifyIdToken(token)
      .then(async function (decodedToken) {
        // console.log(decodedToken.admin);
        const info = await getInfoByMail(res, decodedToken.email);
        if (
          (info.unlockFilm == undefined ||
            info.unlockFilm[fid] == undefined ||
            info.unlockFilm[fid].end < Date.now()) &&
          !decodedToken.admin
        )
          // send link defaul
          messagesRef
            .child("phimlinkdefault")
            .orderByChild("film_id")
            .equalTo(parseInt(fid))
            .get()
            .then((res1) => {
              if (res1.val() == null) {
                res.json(null);
              } else res.send(Object.values(res1.val())[0].chap);
            })
            .catch((e) => console.log(e));
        else {
          // send link vip (merger defaul and vip)
          messagesRef
            .child("phimlinkvip2")
            .orderByChild("film_id")
            .equalTo(parseInt(fid))
            .get()
            .then((res1) => {
              messagesRef
                .child("phimlinkdefault")
                .orderByChild("film_id")
                .equalTo(parseInt(fid))
                .get()
                .then((res2) => {
                  if (res1.val() == null && res2.val() == null) {
                    res.json(null);
                  } else if (res1.val() == null) {
                    res.send({
                      vip: true,
                      data: [Object.values(res2.val())[0], {}],
                    });
                  } else if (res2.val() == null) {
                    res.send({
                      vip: true,
                      data: [{}, Object.values(res1.val())[0]],
                    });
                  } else {
                    linkthuong = Object.values(res2.val())[0];
                    linkvip = Object.values(res1.val())[0];
                    res.send({ vip: true, data: [linkthuong, linkvip] });
                  }
                })
                .catch((e) => console.log(e));
            })
            .catch((e) => console.log(e));
        }
      })
      .catch((e) => {
        console.log(e);
        return error403(res);
      });
  } catch (error) {
    return error500(res);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const search = await messagesRef
      .child("phimlink")
      .orderByChild("film_id")
      .equalTo(parseInt(id))
      .once("value");

    if (search.val() == null) return res.send("null");

    let resulf = new Array();
    Object.values(search.val()).forEach((e, i) => {
      if (e.vip != true) resulf[i] = e;
      else {
        e.link = "vip only";
        resulf[i] = e;
      }
    });

    res.send(resulf);
  } catch (error) {
    return error500(res);
  }
});

function isInt(value) {
  return (
    !isNaN(value) &&
    parseInt(Number(value)) == value &&
    !isNaN(parseInt(value, 10))
  );
}

module.exports = router;
