const express = require("express");
const router = express.Router();
const { error500, error403, error400 } = require("../util/res");
const verifyToken = require("../middleware/auth");
const { firebase } = require("../initFirebase");
const e = require("express");
const { response } = require("express");

let messagesRef = firebase.database().ref();

//get data
router.post("/dashboard", async (req, res, next) => {
  try {
    const { token } = req.body;
    firebase
      .auth()
      .verifyIdToken(token)
      .then(async function (decodedToken) {
        if (!!decodedToken.admin) {
          const thongke = await messagesRef.child("thongke").once("value");
          res.send(thongke.val());
        } else return error403(res);
      })
      .catch((error) => {
        console.log(error);
        return error500(res);
      });
  } catch (err) {
    next(err);
  }
});

router.post("/alluser", async (req, res, next) => {
  try {
    const { token } = req.body;
    firebase
      .auth()
      .verifyIdToken(token)
      .then(async function (decodedToken) {
        if (!!decodedToken.admin) {
          const alluser = await messagesRef.child("users").once("value");
          res.send(Object.values(alluser.val()));
        } else return error403(res);
      })
      .catch((error) => {
        console.log(error);
        return error500(res);
      });
  } catch (err) {
    next(err);
  }
});

//ADMIN_LINK :
function cleanLink(snap, fid) {
  let a = { film_id: fid };
  if (snap.val() == null) a = snap.val();
  else {
    a.chap = Object.values(snap.val())[0].chap;
    if (a.chap.length >= 1) {
      a.chap = Object.assign({}, a.chap);
    }
  }
  return a;
}

router.post("/linkvip2", async (req, res, next) => {
  try {
    const { token, fid } = req.body;
    firebase
      .auth()
      .verifyIdToken(token)
      .then(async function (decodedToken) {
        if (!!decodedToken.admin) {
          messagesRef
            .child("phimlinkvip2")
            .orderByChild("film_id")
            .equalTo(fid)
            .get()
            .then((snap) => {
              let a = cleanLink(snap, fid);
              res.json(a);
            });
        } else return error403(res);
      })
      .catch((error) => {
        console.log(error);
        return error500(res);
      });
  } catch (err) {
    next(err);
  }
});

router.post("/linkdefault2", async (req, res, next) => {
  try {
    const { token, fid } = req.body;
    firebase
      .auth()
      .verifyIdToken(token)
      .then(async function (decodedToken) {
        if (!!decodedToken.admin) {
          await messagesRef
            .child("phimlinkdefault")
            .orderByChild("film_id")
            .equalTo(fid)
            .get()
            .then((snap) => {
              let a = cleanLink(snap, fid);
              res.json(a);
            });
        } else return error403(res);
      })
      .catch((error) => {
        console.log(error);
        return error500(res);
      });
  } catch (err) {
    next(err);
  }
});

router.post("/linksub", async (req, res, next) => {
  try {
    const { token, fid } = req.body;
    firebase
      .auth()
      .verifyIdToken(token)
      .then(async function (decodedToken) {
        if (!!decodedToken.admin) {
          const alluser = await messagesRef
            .child("linksub")
            .orderByChild("film_id")
            .equalTo(fid)
            .get()
            .then((snap) => {
              let a = cleanLink(snap, fid);
              res.json(a);
              // let a;
              // if (snap.val() == null) a = snap.val();
              // else if (snap.val().length == 1) a = snap.val()[0];
              // else if (snap.val().length == 2) a = snap.val()[1];
              // else if (snap.val().length === undefined)
              //   a = Object.values(snap.val())[0];
              // else a = snap.val();
              // if (a !== null) {
              //   if (a.chap.length == 1) a.chap = { 1: a.chap[0] };
              //   else if (a.chap.length == 2) a.chap = { 1: a.chap[1] };
              // }
              // console.log(a);
              // res.json(a);
            });
        } else return error403(res);
      })
      .catch((error) => {
        console.log(error);
        return error500(res);
      });
  } catch (err) {
    next(err);
  }
});
//

router.post("/allvoucher", async (req, res, next) => {
  try {
    const { token } = req.body;
    firebase
      .auth()
      .verifyIdToken(token)
      .then(async function (decodedToken) {
        if (!!decodedToken.admin) {
          const all = await messagesRef.child("voucher").once("value");
          res.send(Object.values(all.val()));
        } else return error403(res);
      })
      .catch((error) => {
        console.log(error);
        return error500(res);
      });
  } catch (err) {
    next(err);
  }
});

router.post("/allnap", async (req, res, next) => {
  try {
    const { token } = req.body;
    firebase
      .auth()
      .verifyIdToken(token)
      .then(async function (decodedToken) {
        if (!!decodedToken.admin) {
          const newnap = await messagesRef
            .child("napkoin")
            // .orderByChild("xuly")
            // .equalTo("none")
            .once("value");
          res.send(Object.values(newnap.val()));
        } else return error403(res);
      })
      .catch((error) => {
        console.log(error);
        return error500(res);
      });
  } catch (err) {
    next(err);
  }
});

router.post("/allreport", async (req, res, next) => {
  try {
    const { token } = req.body;
    firebase
      .auth()
      .verifyIdToken(token)
      .then(async function (decodedToken) {
        if (!!decodedToken.admin) {
          const all = await messagesRef.child("report").once("value");
          res.send(all.val());
        } else return error403(res);
      })
      .catch((error) => {
        console.log(error);
        return error500(res);
      });
  } catch (err) {
    next(err);
  }
});

router.get("/allstk", async (req, res, next) => {
  try {
    const all = await messagesRef.child("stk").once("value");
    res.send(all.val());
  } catch (err) {
    next(err);
  }
});

//update
router.post("/update/phim", (req, res, next) => {
  try {
    const { token, FObject } = req.body;
    firebase
      .auth()
      .verifyIdToken(token)
      .then(async function (decodedToken) {
        if (!!decodedToken.admin) {
          messagesRef
            .child("phiminfo2")
            .orderByChild("id")
            .equalTo(FObject.id)
            .get()
            .then((snap) => {
              // console.log()
              snap.ref
                .update({ [Object.keys(snap.val())[0]]: FObject })
                .then(() => {
                  return res.send("okok");
                });
            })
            .catch((e) => {
              return error500(res);
            });
        } else return error403(res);
      })
      .catch((error) => {
        console.log(error);
        return error500(res);
      });
  } catch (err) {
    next(err);
  }
});

router.post("/update/user", (req, res, next) => {
  try {
    const { token, UObject } = req.body;
    firebase
      .auth()
      .verifyIdToken(token)
      .then(async function (decodedToken) {
        if (!!decodedToken.admin) {
          messagesRef
            .child("users")
            .orderByChild("code")
            .equalTo(UObject.code)
            .get()
            .then((snap) => {
              snap.ref.update({ [UObject.code]: UObject }).then(() => {
                return res.send("okok");
              });
            })
            .catch((e) => {
              return error500(res);
            });
        } else return error403(res);
      })
      .catch((error) => {
        console.log(error);
        return error500(res);
      });
  } catch (err) {
    next(err);
  }
});

router.post("/update/link", async (req, res, next) => {
  try {
    const { token, LObject } = req.body;
    firebase
      .auth()
      .verifyIdToken(token)
      .then(function (decodedToken) {
        if (!!decodedToken.admin) {
          messagesRef
            .child("phimlink")
            .orderByChild("id")
            .equalTo(LObject.id)
            .get()
            .then((snap) => {
              snap.ref
                .update({ [Object.keys(snap.val())[0]]: LObject })
                .then(() => {
                  return res.send("okok");
                });
            })
            .catch((e) => {
              return error500(res);
            });
        } else return error403(res);
      })
      .catch((error) => {
        console.log(error);
        return error500(res);
      });
  } catch (err) {
    next(err);
  }
});

router.post("/update/link2", async (req, res, next) => {
  try {
    const { token, fid, LDefaul, LVip, LSub } = req.body;
    firebase
      .auth()
      .verifyIdToken(token)
      .then(function (decodedToken) {
        if (!!decodedToken.admin) {
          console.log(LDefaul);
          // console.log(LVip);
          // console.log(LSub);
          // console.log(fid);
          res.send("eee");
          messagesRef
            .child("phimlinkdefault")
            .orderByChild("film_id")
            .equalTo(fid)
            .get()
            .then((snap) => {
              let b;
              if (snap.val() == null) b = null;
              else if (snap.val().length == 1) b = 0;
              else if (snap.val().length == 2) b = 1;
              else b = Object.keys(snap.val())[0];
              if (b == null)
                messagesRef
                  .child("phimlinkdefault")
                  .push({ chap: LDefaul, film_id: fid });
              else {
                messagesRef
                  .child("phimlinkdefault/" + b + "/chap")
                  .set(LDefaul);
              }
            });
          messagesRef
            .child("phimlinkvip2")
            .orderByChild("film_id")
            .equalTo(fid)
            .get()
            .then((snap) => {
              let b;
              if (snap.val() == null) b = null;
              else if (snap.val().length == 1) b = 0;
              else if (snap.val().length == 2) b = 1;
              else b = Object.keys(snap.val())[0];
              if (b == null)
                messagesRef
                  .child("phimlinkvip2")
                  .push({ chap: LVip, film_id: fid });
              else {
                messagesRef.child("phimlinkvip2/" + b + "/chap").set(LVip);
              }
            });
          messagesRef
            .child("linksub")
            .orderByChild("film_id")
            .equalTo(fid)
            .get()
            .then((snap) => {
              let b;
              if (snap.val() == null) b = null;
              else if (snap.val().length == 1) b = 0;
              else if (snap.val().length == 2) b = 1;
              else b = Object.keys(snap.val())[0];
              if (b == null)
                messagesRef.child("linksub").push({ chap: LSub, film_id: fid });
              else {
                messagesRef.child("linksub/" + b + "/chap").set(LSub);
              }
            });
          // });
          // messagesRef
          //   .child("phimlinkdefaul")
          //   .orderByChild("id")
          //   .equalTo(LDefaul.id)
          //   .get()
          //   .then((snap) => {
          //     snap.ref
          //       .update({ [Object.keys(snap.val())[0]]: LObject })
          //       .then(() => {
          //         messagesRef
          //           .child("phimlinkvip")
          //           .orderByChild("id")
          //           .equalTo(LVip.id)
          //           .get()
          //           .then((snap2) => {
          //             snap2.ref
          //               .update({ [Object.keys(snap2.val())[0]]: LVip })
          //               .then(() => {
          //                 return res.send("okok");
          //               });
          //           });
          //       });
          //   })
          //   .catch((e) => {
          //     return error500(res);
          //   });
        } else return error403(res);
      })
      .catch((error) => {
        console.log(error);
        return error500(res);
      });
  } catch (err) {
    next(err);
  }
});

router.post("/update/voucher", (req, res, next) => {
  try {
    const { token, VObject } = req.body;
    firebase
      .auth()
      .verifyIdToken(token)
      .then(function (decodedToken) {
        if (!!decodedToken.admin) {
          messagesRef
            .child("voucher/" + VObject.code)
            .update(VObject)
            .then(() => {
              return res.send("okok");
            })
            .catch((e) => {
              return error500(res);
            });
        } else return error403(res);
      })
      .catch((error) => {
        console.log(error);
        return error500(res);
      });
  } catch (err) {
    next(err);
  }
});

router.post("/update/stk", (req, res, next) => {
  try {
    const { token, stk } = req.body;
    firebase
      .auth()
      .verifyIdToken(token)
      .then(function (decodedToken) {
        if (!!decodedToken.admin) {
          messagesRef
            .child("stk")
            .update(stk)
            .then(() => {
              return res.send("okok");
            })
            .catch((e) => {
              return error500(res);
            });
        } else return error403(res);
      })
      .catch((error) => {
        console.log(error);
        return error500(res);
      });
  } catch (err) {
    next(err);
  }
});

// add
router.post("/addvoucher", (req, res, next) => {
  try {
    const { token, code, point } = req.body;
    firebase
      .auth()
      .verifyIdToken(token)
      .then(async function (decodedToken) {
        if (!!decodedToken.admin) {
          messagesRef
            .child("voucher/" + code)
            .set({
              code: code,
              point: point,
            })
            .then(res.send("okok"));
        } else return error403(res);
      })
      .catch((error) => {
        console.log(error);
        return error500(res);
      });
  } catch (err) {
    next(err);
  }
});

router.post("/addphim", (req, res, next) => {
  try {
    const { token, FObject } = req.body;
    firebase
      .auth()
      .verifyIdToken(token)
      .then(async function (decodedToken) {
        if (!!decodedToken.admin) {
          messagesRef
            .child("phiminfo2/" + FObject.id)
            .set(FObject)
            .then(() => {
              res.send("okok");
              // messagesRef
              //   .child("thongke/phim")
              //   .get()
              //   .then((snap) => {
              //     messagesRef.child("thongke/phim").set(snap.val() + 1);
              //   });
            });
        } else return error403(res);
      })
      .catch((error) => {
        console.log(error);
        return error500(res);
      });
  } catch (err) {
    next(err);
  }
});

router.post("/addlink", async (req, res, next) => {
  try {
    let { token, LObject } = req.body;
    firebase
      .auth()
      .verifyIdToken(token)
      .then(async function (decodedToken) {
        if (!!decodedToken.admin) {
          const last = (
            await messagesRef
              .child("phimlink")
              .orderByChild("id")
              .limitToLast(1)
              .once("value")
          ).val();
          LObject.id = Object.values(last)[0].id + 1;
          messagesRef
            .child("phimlink")
            .push(LObject)
            .then(() => {
              res.send("okok");
              // messagesRef
              //   .child("thongke/link")
              //   .get()
              //   .then((snap) => {
              //     messagesRef.child("thongke/link").set(snap.val() + 1);
              //   });
            });
        } else return error403(res);
      })
      .catch((error) => {
        console.log(error);
        return error500(res);
      });
  } catch (err) {
    next(err);
  }
});

// delete --- voucher, report, nap, link
router.post("/deletevoucher", (req, res, next) => {
  try {
    const { token, code } = req.body;
    firebase
      .auth()
      .verifyIdToken(token)
      .then(function (decodedToken) {
        if (!!decodedToken.admin) {
          messagesRef
            .child("voucher/" + code)
            .remove()
            .then(() => {
              return res.send("okok");
            })
            .catch((e) => {
              return error500(res);
            });
        } else return error403(res);
      })
      .catch((error) => {
        console.log(error);
        return error500(res);
      });
  } catch (err) {
    next(err);
  }
});

router.post("/delet111ereport", (req, res, next) => {
  try {
    const { token, key } = req.body;
    firebase
      .auth()
      .verifyIdToken(token)
      .then(function (decodedToken) {
        if (!!decodedToken.admin) {
          messagesRef
            .child("report/" + key)
            .remove()
            .then(() => {
              return res.send("okok");
            })
            .catch((e) => {
              return error500(res);
            });
        } else return error403(res);
      })
      .catch((error) => {
        console.log(error);
        return error500(res);
      });
  } catch (err) {
    next(err);
  }
});

router.post("/deletenap", (req, res, next) => {
  try {
    const { token, mgdtype } = req.body;
    firebase
      .auth()
      .verifyIdToken(token)
      .then(function (decodedToken) {
        if (!!decodedToken.admin) {
          messagesRef
            .child("napkoin/" + mgdtype)
            .remove()
            .then(() => {
              return res.send("okok");
            })
            .catch((e) => {
              return error500(res);
            });
        } else return error403(res);
      })
      .catch((error) => {
        console.log(error);
        return error500(res);
      });
  } catch (err) {
    next(err);
  }
});

// delete all nap da xu ly hon 7 ngay
router.post("/deleteoldnap", async (req, res, next) => {
  try {
    const { token } = req.body;
    firebase
      .auth()
      .verifyIdToken(token)
      .then(async function (decodedToken) {
        if (!!decodedToken.admin) {
          let value = await messagesRef
            .child("napkoin")
            .orderByChild("updateDate")
            .startAt(0)
            .endAt(Date.now() - 7 * 1000 * 60 * 60 * 24)
            .once("value");

          value.forEach((e) => {
            console.log(e.val());
            if (e.val().xuly != "none")
              messagesRef
                .child("napkoin/" + e.val().mgd + e.val().type)
                .remove();
          });

          res.send("okok");
        } else return error403(res);
      })
      .catch((error) => {
        console.log(error);
        return error500(res);
      });
  } catch (err) {
    next(err);
  }
});

router.post("/deletelink", (req, res, next) => {
  try {
    const { token, lid } = req.body;
    firebase
      .auth()
      .verifyIdToken(token)
      .then(function (decodedToken) {
        if (!!decodedToken.admin) {
          messagesRef
            .child("phimlink")
            .orderByChild("id")
            .equalTo(lid)
            .get()
            .then((snap) => {
              messagesRef
                .child("phimlink/" + Object.keys(snap.val())[0])
                .remove()
                .then(() => {
                  res.send("okok");
                  // messagesRef
                  //   .child("thongke/link")
                  //   .get()
                  //   .then((snap) => {
                  //     messagesRef.child("thongke/link").set(snap.val() - 1);
                  //   });
                });
            })
            .catch((e) => {
              return error500(res);
            });
        } else return error403(res);
      })
      .catch((error) => {
        console.log(error);
        return error500(res);
      });
  } catch (err) {
    next(err);
  }
});
// disable -- user, phim
router.post("/banuser", async (req, res) => {
  const { token, email } = req.body;
  firebase
    .auth()
    .verifyIdToken(token)
    .then(async function (decodedToken) {
      if (!!decodedToken.admin) {
        firebase
          .auth()
          .getUserByEmail(email)
          .then((userRecord) => {
            firebase
              .auth()
              .updateUser(userRecord.uid, {
                disabled: true,
              })
              .then(() => {
                messagesRef
                  .child("users")
                  .orderByChild("email")
                  .equalTo(email)
                  .get()
                  .then((snap) => {
                    messagesRef
                      .child("users/" + Object.values(snap.val())[0].code)
                      .update({
                        disabled: true,
                      });
                    res.send("okok");
                  });
              });
          })
          .catch((e) => {
            return error500(res);
          });
      } else return error403(res);
    })
    .catch((error) => {
      console.log(error);
      return error500(res);
    });
});

router.post("/unbanuser", async (req, res) => {
  const { token, email } = req.body;
  firebase
    .auth()
    .verifyIdToken(token)
    .then(async function (decodedToken) {
      if (!!decodedToken.admin) {
        firebase
          .auth()
          .getUserByEmail(email)
          .then((userRecord) => {
            firebase
              .auth()
              .updateUser(userRecord.uid, {
                disabled: false,
              })
              .then(() => {
                messagesRef
                  .child("users")
                  .orderByChild("email")
                  .equalTo(email)
                  .get()
                  .then((snap) => {
                    messagesRef
                      .child("users/" + Object.values(snap.val())[0].code)
                      .update({
                        disabled: null,
                      });
                    res.send("okok");
                  });
              });
          })
          .catch((e) => {
            return error500(res);
          });
      } else return error403(res);
    })
    .catch((error) => {
      console.log(error);
      return error500(res);
    });
});

router.post("/disablephim", (req, res) => {
  const { token, fid } = req.body;
  firebase
    .auth()
    .verifyIdToken(token)
    .then(async function (decodedToken) {
      if (!!decodedToken.admin) {
        messagesRef
          .child("phiminfo2/" + fid)
          .update({
            disabled: true,
          })
          .then(res.send("okok"));
      } else return error403(res);
    })
    .catch((error) => {
      console.log(error);
      return error500(res);
    });
});

router.post("/enablephim", (req, res) => {
  const { token, fid } = req.body;
  firebase
    .auth()
    .verifyIdToken(token)
    .then(async function (decodedToken) {
      if (!!decodedToken.admin) {
        messagesRef
          .child("phiminfo2/" + fid)
          .update({
            disabled: null,
          })
          .then(res.send("okok"));
      } else return error403(res);
    })
    .catch((error) => {
      console.log(error);
      return error500(res);
    });
});

// xu ly
// action: true or false; mgdtype: 1234567momo
router.post("/xulynapkoin", async (req, res) => {
  const { token, mgdtype, action } = req.body;
  firebase
    .auth()
    .verifyIdToken(token)
    .then(async function (decodedToken) {
      if (!!decodedToken.admin) {
        messagesRef
          .child("napkoin/" + mgdtype)
          .get()
          .then((snap) => {
            if (snap.val().xuly == "true") res.send("da nap roi");
            else {
              NapObject = snap.val();
              snap.ref
                .update({
                  xuly: action ? "true" : "false",
                  updateDate: Date.now(),
                })
                .then(() => {
                  action
                    ? messagesRef
                        .child("users/" + NapObject.user)
                        .get()
                        .then((snap) => {
                          snap.ref
                            .update({ coin: snap.val().coin + NapObject.coin })
                            .then(() => {
                              res.send("okok1");
                              messagesRef
                                .child(
                                  "thongke/doanhthu/" +
                                    new Date().toISOString().slice(0, 10)
                                )
                                .get()
                                .then((snap) => {
                                  if (snap.exists())
                                    messagesRef
                                      .child(
                                        "thongke/doanhthu/" +
                                          new Date().toISOString().slice(0, 10)
                                      )
                                      .set(snap.val() + NapObject.coin);
                                  else
                                    messagesRef
                                      .child(
                                        "thongke/doanhthu/" +
                                          new Date().toISOString().slice(0, 10)
                                      )
                                      .set(NapObject.coin);
                                });
                            });
                        })
                    : res.send("okok2");
                });
            }
          })
          .catch((e) => {
            return error500(res);
          });
      } else return error403(res);
    })
    .catch((error) => {
      console.log(error);
      return error500(res);
    });
});

router.get("/addanadmin", async (req, res) => {
  firebase
    .auth()
    .getUserByEmail("maivanluong0458@gmail.com")
    .then((userRecord) => {
      firebase
        .auth()
        .setCustomUserClaims(userRecord.uid, { admin: true })
        .then(() => {
          console.log("okkk");
        });
    });
});

router.get("/addanemployee", async (req, res) => {
  firebase
    .auth()
    .getUserByEmail("pffgia2@gmail.com")
    .then((userRecord) => {
      firebase
        .auth()
        .setCustomUserClaims(userRecord.uid, { employee: true })
        .then(() => {
          console.log("okkk");
        });
    });
});

module.exports = router;
