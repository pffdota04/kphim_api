const express = require("express");
const router = express.Router();
const { error500, error400 } = require("../util/res");
const verifyToken = require("../middleware/auth");
const { firebase } = require("./../initFirebase");
const { response } = require("express");

let messagesRef = firebase.database().ref();

// START NEW:

// FOR POSTMAN
// router.post("", async (req, res) => {
//   let data = req.body;
//   try {
//     firebase
//       .auth()
//       .verifyIdToken(data.token)
//       .then(async function (decodedToken) {
//         if (!!decodedToken.admin) {
//           messagesRef
//             .child("/phiminfo")
//             .push(data.info)
//             .then(() => {
//               let copy = data.detail;
//               copy.createDay = Date.now();
//               copy._id = data.info._id;
//               messagesRef.child("/phimdetail").push(copy);
//               res.send("ok");
//             });
//         } else return error403(res);
//       })
//       .catch((error) => {
//         console.log(error);
//         return error500(res);
//       });
//   } catch (error) {
//     console.log(error);
//     return error500(res);
//   }
// });

router.post("", async (req, res) => {
  let phimdetail = req.body.phimdetail;
  let phiminfo = req.body.phiminfo;
  // console.log(phimdetail);
  // console.log(phiminfo)
  try {
    firebase
      .auth()
      .verifyIdToken(req.headers.authorization)
      .then(async function (decodedToken) {
        if (!!decodedToken.admin) {
          messagesRef
            .child("/phiminfo")
            .push(phiminfo)
            .then(() => {
              phimdetail.createDay = Date.now();
              phimdetail._id = phiminfo._id;
              messagesRef
                .child("/phimdetail")
                .push(phimdetail)
                .then(() => {
                  res.send("ok");
                })
                .catch((error) => {
                  console.log(error);
                  return error500(res);
                });
            })
            .catch((error) => {
              console.log(error);
              return error500(res);
            });
        } else return error403(res);
      })
      .catch((error) => {
        console.log(error);
        return error500(res);
      });
  } catch (error) {
    console.log(error);
    return error500(res);
  }
});

router.get("/info/:id", async (req, res) => {
  const id = req.params.id;
  let film = await getFilmInfo(id);
  if (film.error === undefined) res.send(film);
  else return error500(res);
});

router.get("/detail/:id", async (req, res) => {
  const id = req.params.id;
  let film = await getFilmDetail(id);
  if (film.error === undefined) res.send(film);
  else return error500(res);
});

router.get("/homepage", async (req, res) => {
  try {
    const homepage = await messagesRef.child("homepage").once("value");
    let top = [];
    top = await Promise.all(
      homepage.val().top.map(async (e) => {
        let abc = await getFilmInfo(e);
        return abc;
      })
    );

    let trendingFilm = [];
    trendingFilm = await Promise.all(
      homepage.val().trending.map(async (e) => {
        let abc = await getFilmInfo(e);
        return abc;
      })
    );

    let recommendFilm = [];
    recommendFilm = await Promise.all(
      homepage.val().recommend.map(async (e) => {
        let abc = await getFilmInfo(e);
        return abc;
      })
    );

    const lastFilm = await messagesRef
      .child("phiminfo")
      .orderByChild("_id")
      .limitToLast(12)
      .once("value");

    let topdetail = [];
    topdetail = await Promise.all(
      homepage.val().top.map(async (e) => {
        let abc = await getFilmDetail(e);
        return abc;
      })
    );
    res.json({
      top: top,
      topdetail: topdetail,
      trending: trendingFilm,
      recommend: recommendFilm,
      last: lastFilm,
    });
  } catch (error) {
    console.log(error);
    return error500(res);
  }
});

const getFilmInfo = async (id) => {
  try {
    let res = await messagesRef
      .child("phiminfo")
      .orderByChild("_id")
      .equalTo(parseInt(id))
      .once("value");
    if (res !== null)
      return { ...Object.values(res.val())[0], key: Object.keys(res.val())[0] };
    else return { error: 500 };
  } catch (error) {
    return { error: 500 };
  }
};

const getFilmDetail = async (id) => {
  try {
    let res = await messagesRef
      .child("phimdetail")
      .orderByChild("_id")
      .equalTo(parseInt(id))
      .once("value");
    if (res !== null)
      return {
        ...Object.values(res.val())[0],
        key: Object.keys(res.val())[0],
      };
    else return { error: 500 };
  } catch (error) {
    return { error: 500 };
  }
};

router.get("/caterogy/:value/:last", async function (req, res) {
  const value = req.params.value;
  const last = req.params.last;

  const numPerPgae = 12;

  let typeOfValue = "init";
  let resuftObj = new Object();

  // Check value => Năm / Quốc gia/ Thể loại
  if (value !== "tatca") {
    const theloai = [
      "action",
      "movie",
      "series",
      "scifi",
      "comedy",
      "anime",
      "adventure",
      "document",
      "fantasy",
      "history",
      "horror",
      "romantic",
      "war",
      "drama",
      "history",
      "crime",
      "family",
    ];
    const quocgia = ["us", "ja", "ko", "vi", "es", "ch"];
    if (theloai.includes(value)) typeOfValue = "theloai";
    else if (quocgia.includes(value)) typeOfValue = "quocgia";
    else if (isInt(value)) typeOfValue = "nam";
    else return error400(res, "Unknow params");
  } else typeOfValue = value;

  switch (typeOfValue) {
    case "tatca": {
      if (last == -1) {
        resuftObj = await messagesRef
          .child("phiminfo")
          .limitToLast(numPerPgae)
          .once("value");
      } else {
        resuftObj = await messagesRef
          .child("phiminfo")
          .orderByKey()
          // .endBefore(last, last.toString())
          .endBefore(last)
          // .endBefore(last, last.toString())
          .limitToLast(numPerPgae)
          .once("value");
      }
      break;
    }
    case "theloai": {
      if (last == -1) {
        resuftObj = await messagesRef
          .child("phiminfo")
          .orderByChild("type/" + value)
          .equalTo(value)
          .limitToLast(numPerPgae)
          .once("value");
      } else {
        resuftObj = await messagesRef
          .child("phiminfo")
          .orderByChild("type/" + value)
          .startAt(value)
          .endBefore(value, last.toString())
          .limitToLast(numPerPgae)
          .once("value");
      }
      break;
    }
    case "quocgia": {
      if (last == -1) {
        resuftObj = await messagesRef
          .child("phiminfo")
          .orderByChild("country")
          .equalTo(value)
          .limitToLast(numPerPgae)
          .once("value");
      } else {
        resuftObj = await messagesRef
          .child("phiminfo")
          .orderByChild("country")
          .startAt(value)
          .endBefore(value, last.toString())
          .limitToLast(numPerPgae)
          .once("value");
      }
      break;
    }
    case "nam": {
      if (last == -1) {
        resuftObj = await messagesRef
          .child("phiminfo")
          .orderByChild("year")
          .equalTo(parseInt(value))
          .limitToLast(numPerPgae)
          .once("value");
      } else {
        resuftObj = await messagesRef
          .child("phiminfo")
          .orderByChild("year")
          .startAt(value)
          .endBefore(value, last.toString())
          .limitToLast(numPerPgae)
          .once("value");
      }
      break;
    }
    default:
      break;
  }
  let reverseArray, lastkey;

  if (resuftObj.val() == null || resuftObj.val() == undefined) {
    reverseArray = "null";
    lastkey = null;
  } else {
    reverseArray = Object.values(resuftObj.val()).reverse();

    lastkey = Object.keys(resuftObj.val())[0];
  }

  res.send({ data: reverseArray, lastKey: lastkey });
});

router.get("/all", async (req, res) => {
  try {
    const search = await messagesRef.child("phiminfo").once("value");
    res.json(search);
  } catch (error) {
    return error500(res);
  }
});

router.get("/homeId", async (req, res) => {
  messagesRef
    .child("homepage")
    .get()
    .then((snap) => res.send(snap.val()));
});

router.get("/view/:id", async (req, res) => {
  try {
    const id = req.params.id;
    res.send((await messagesRef.child("view/" + id).once("value")).val());
  } catch (error) {
    console.log(error);
    return error500(res);
  }
});

router.put("/view/:id", async (req, res) => {
  try {
    const id = req.params.id;

    messagesRef
      .child("view/" + id)
      .get()
      .then((newRes) => {
        if (newRes.val() == null) {
          newRes.ref.update({ view: 1 });
        } else {
          let x = newRes.val().view + 1;
          newRes.ref.update({ view: x }, (e) => console.log(e));
        }
        res.send("+1 view");
      });
  } catch (error) {
    return error500(res);
  }
});

router.put("", async (req, res) => {
  try {
    let phimdetail = req.body.phimdetail;
    let phiminfo = req.body.phiminfo;

    let keyDetail = phimdetail.key;
    let keyInfo = phiminfo.key;

    delete phimdetail.key;
    delete phiminfo.key;

    firebase
      .auth()
      .verifyIdToken(req.headers.authorization)
      .then(async function (decodedToken) {
        if (!!decodedToken.admin) {
          messagesRef
            .child("phiminfo/" + keyInfo)
            .update(phiminfo)
            .then(() => {
              messagesRef
                .child("phimdetail/" + keyDetail)
                .update(phimdetail)
                .then(() => {
                  res.send("ok");
                })
                .catch((error) => {
                  console.log(error);
                  return error500(res);
                });
            })
            .catch((error) => {
              console.log(error);
              return error500(res);
            });
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

router.put("/disable", async (req, res) => {
  try {
    let fid = req.body.fid;
    firebase
      .auth()
      .verifyIdToken(req.headers.authorization)
      .then(async function (decodedToken) {
        if (!!decodedToken.admin) {
          messagesRef
            .child("phiminfo")
            .orderByChild("_id")
            .equalTo(parseInt(fid))
            .get()
            .then((snap) => {
              if (snap.val() !== null) {
                let a = Object.values(snap.val())[0];
                a.disable = true;
                messagesRef
                  .child("phiminfo/" + Object.keys(snap.val())[0])
                  .update(a)
                  .then(() => {
                    res.send("ok");
                  })
                  .catch((error) => {
                    console.log(error);
                    return error500(res);
                  });
              } else error400(res, "Not found id");
            });
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

router.put("/enable", async (req, res) => {
  try {
    let fid = req.body.fid;
    firebase
      .auth()
      .verifyIdToken(req.headers.authorization)
      .then(async function (decodedToken) {
        if (!!decodedToken.admin) {
          messagesRef
            .child("phiminfo")
            .orderByChild("_id")
            .equalTo(parseInt(fid))
            .get()
            .then((snap) => {
              if (snap.val() !== null) {
                let a = Object.values(snap.val())[0];
                console.log(a);
                delete a.disable;
                console.log(a);
                messagesRef
                  .child("phiminfo/" + Object.keys(snap.val())[0] + "/disable")
                  // .update(a)
                  .remove()
                  .then(() => {
                    res.send("ok");
                  })
                  .catch((error) => {
                    console.log(error);
                    return error500(res);
                  });
              } else error400(res, "Not found id");
            });
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

router.get("/search", async (req, res) => {
  try {
    const search = await messagesRef.child("phiminfo2").once("value");
    res.json(search);
  } catch (error) {
    return error500(res);
  }
});

router.get("/home", async (req, res) => {
  try {
    const lastFilm = await messagesRef
      .child("phiminfo2")
      .orderByChild("id")
      .limitToLast(12)
      .once("value");
    const trendingFilm = await messagesRef
      .child("phiminfo2")
      .orderByChild("trending")
      .startAt(1)
      .limitToFirst(10)
      .once("value");
    const recommendFilm = await messagesRef
      .child("phiminfo2")
      .orderByChild("recommend")
      .startAt(1)
      .limitToFirst(10)
      .once("value");
    const top = await messagesRef
      .child("phiminfo2")
      .orderByChild("top")
      .startAt(1)
      .limitToFirst(10)
      .once("value");

    let response = new Object();

    response.last = lastFilm;
    response.trending = trendingFilm;
    response.recommend = recommendFilm;
    response.top = top;

    res.json(response);
  } catch (error) {
    return error500(res);
  }
});

router.get("/recommend", async (req, res) => {
  try {
    const recommendFilm = await messagesRef
      .child("phiminfo2")
      .orderByChild("recommend")
      .startAt(1)
      .limitToFirst(10)
      .once("value");
    res.json(recommendFilm);
  } catch (error) {
    return error500(res);
  }
});

// router.get("/:id", async (req, res) => {
//   const id = req.params.id;
//   try {
//     const search = await messagesRef
//       .child("phiminfo2")
//       .orderByChild("id")
//       .equalTo(parseInt(id))
//       .once("value");

//     if (search.val() == null) {
//       res.send("null");
//       return;
//     }

//     res.json(Object.values(search.val()));
//   } catch (error) {
//     return error500(res);
//   }
// });

router.post("/bylistid", async (req, res) => {
  const list = req.body.list;
  try {
    getByIdList(list, 0, new Array(), res);
  } catch (error) {
    return error500(res);
  }
});

async function getByIdList(list, startAt, callB, res) {
  if (startAt >= list.length) return res.json(callB);
  messagesRef
    // .child("phiminfo2")
    .child("phiminfo")
    .orderByChild("_id")
    .equalTo(parseInt(list[startAt]))
    .get()
    .then((snapshot) => {
      if (snapshot.exists()) {
        callB[startAt] = Object.values(snapshot.val())[0];
        getByIdList(list, startAt + 1, callB, res);
      } else getByIdList(list, startAt + 1, callB, res);
    });
}
//


async function getFilmById(fid) {
  messagesRef
    .child("phiminfo2")
    .orderByChild("id")
    .equalTo(parseInt(list[startAt]))
    .get()
    .then((snapshot) => {
      if (snapshot.exists()) return snapshot.val();
      else return null;
    });
}

function isInt(value) {
  return (
    !isNaN(value) &&
    parseInt(Number(value)) == value &&
    !isNaN(parseInt(value, 10))
  );
}

module.exports = router;
