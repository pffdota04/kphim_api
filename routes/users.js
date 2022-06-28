const express = require("express");
const router = express.Router();
const { error500, error403, error400 } = require("../util/res");
const verifyToken = require("../middleware/auth");
const { firebase } = require("../initFirebase");
const e = require("express");
const film = require("../routes/film");
let nodemailer = require("nodemailer");

let messagesRef = firebase.database().ref();
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
// + add thong ke
async function addNewUsers(res, email, signup) {
  console.log("eeee");

  try {
    let r = Math.random().toString(36).substring(6);
    while (true) {
      const checkCode = await messagesRef
        .child("users")
        .orderByChild("code")
        .equalTo(r)
        .once("value");
      if (checkCode.val() == null) break;
      else r = Math.random().toString(36).substring(6);
    }
    messagesRef
      .child("users/" + r)
      .set({
        email: email,
        createDay: Date.now(),
        coin: 0,
        code: r,
        usedCode: false,
        signup: signup === 1 ? null : signup,
      })
      .then(() => {
        if (signup === 1) {
          res.json({
            [r]: {
              email: email,
              createDay: Date.now(),
              coin: 0,
              code: r,
              usedCode: false,
            },
          });
          messagesRef
            .child("thongke/user")
            .get()
            .then((snap) => {
              messagesRef.child("thongke/user").set(snap.val() + 1);
            });
          messagesRef
            .child("thongke/newuser/" + new Date().toISOString().slice(0, 10))
            .get()
            .then((snap) => {
              if (snap.exists())
                messagesRef
                  .child(
                    "thongke/user/" + new Date().toISOString().slice(0, 10)
                  )
                  .set(snap.val() + 1);
              else
                messagesRef
                  .child(
                    "thongke/user/" + new Date().toISOString().slice(0, 10)
                  )
                  .set(1);
            });
        }
      });
  } catch (e) {
    console.log(e);
    return error500(res);
  }
}

async function getInfoByMail(res, email) {
  try {
    let info = await messagesRef
      .child("users")
      .orderByChild("email")
      .equalTo(email)
      .once("value");
    if (info.val() == null) return null;
    return Object.values(info.val())[0];
  } catch (e) {
    return error500(res);
  }
}

async function getFilmById(fid) {
  const a = await messagesRef
    .child("phiminfo2")
    .orderByChild("id")
    .equalTo(parseInt(fid))
    .once("value");
  if (a.val() == null) return null;
  return Object.values(a.val())[0];
}

//user info
router.get("/info", async (req, res, next) => {
  try {
    const userToken = req.headers.authorization;
    firebase
      .auth()
      .verifyIdToken(userToken)
      .then(async function (decodedToken) {
        const search = await messagesRef
          .child("users")
          .orderByChild("email")
          .equalTo(decodedToken.email)
          .once("value");
        if (search.val() == null) {
          // chua add user
          addNewUsers(res, decodedToken.email, 1);
        } else {
          res.json(search);

          // clean phim het han
          let checkF = Object.values(search.val())[0];
          let hasClean = false;
          let now = Date.now();
          if (checkF.unlockFilm !== null && checkF.unlockFilm !== undefined)
            Object.values(checkF.unlockFilm).map((e, i) => {
              if (e.end < now) {
                checkF.unlockFilm[i] = null;
                hasClean = true;
                messagesRef
                  .child("users/" + checkF.code + "/unlockFilm/" + e.fid)
                  .remove();
              }
            });

          // if (hasClean)
          //   messagesRef
          //     .child("users/" + checkF.code + "/unlockFilm")
          //     .update(checkF.unlockFilm)
          //     .catch(() => {
          //       return;
          //     });
        }
      })
      .catch((e) => {
        console.log(e);
        return error403(res);
      });
  } catch (error) {
    console.log(e);
    return error500(res);
  }
});

// cong 20 coin cho ma gioi thieu
router.post("/usecode", (req, res) => {
  const { token, code } = req.body;
  firebase
    .auth()
    .verifyIdToken(token)
    .then(async function (decodedToken) {
      let email = decodedToken.email;
      let codeInputUser = await messagesRef
        .child("users")
        .orderByChild("code")
        .equalTo(code)
        .once("value");
      if (codeInputUser.val() != null) {
        let checkCode = codeInputUser.val()[Object.keys(codeInputUser.val())];
        const info = await getInfoByMail(res, email);
        if (info != null) {
          if (info.usedCode == false) {
            if (info.code == code) return error400(res, "not your code");
            else {
              messagesRef.child("users/" + checkCode.code).update({
                coin: checkCode.coin + 20,
              });
              messagesRef.child("users/" + info.code).update({
                usedCode: true,
                coin: info.coin + 20,
              });
              return res.json({ complete: true });
            }
          } else return error400(res, "user used code");
        } else return error500(res);
      } else return error400(res, "not found");
    })
    .catch((e) => {
      return error403(res);
    });
});

router.post("/voucher", async (req, res) => {
  const { token, code } = req.body;
  firebase
    .auth()
    .verifyIdToken(token)
    .then(async function (decodedToken) {
      let email = decodedToken.email;
      const Voucher = await messagesRef
        .child("voucher")
        .orderByChild("code")
        .equalTo(code)
        .once("value");
      if (Voucher.val() != null) {
        const isVoucher = Voucher.val()[Object.keys(Voucher.val())];
        if (isVoucher.usedBy == null) {
          const info = await getInfoByMail(res, email);
          if (info != null) {
            messagesRef
              .child("users/" + info.code)
              .update({ coin: info.coin + isVoucher.point });

            messagesRef.child("voucher/" + code).update({
              usedBy: email,
              usedDate: Date.now(),
            });
            return res.json({
              complete: true,
              voucherPoint: isVoucher.point,
            });
          } else return error500(res);
        } else return error400(res, "used voucher");
      } else return error400(res, "not found");
    })
    .catch(function (error) {
      return error403(res);
    });
});

router.post("/napkoin", async (req, res) => {
  try {
    const { token, mgd, type, coin, note } = req.body;
    firebase
      .auth()
      .verifyIdToken(token)
      .then(async function (decodedToken) {
        let email = decodedToken.email;
        const existReq = await messagesRef
          .child("napkoin/" + mgd + type)
          .once("value");

        if (existReq.val() != null) return error400(res, "exist");
        else {
          const info = await getInfoByMail(res, email);
          messagesRef
            .child("napkoin/" + mgd + type)
            .set({
              createDay: Date.now(),
              mgd: mgd,
              user: info.code,
              type: type,
              coin: parseInt(coin),
              xuly: "none",
              note: note,
            })
            .then(() => {
              return res.json({ complete: true });
            })
            .catch(() => {
              console.log(e);
              error500(res);
            });
        }
      })
      .catch(() => {
        return error403(res);
      });
  } catch {
    console.log(e);
    return error500(res);
  }
});

router.post("/unlock", async (req, res) => {
  try {
    const { token, fid, plan } = req.body;
    const planDay = [3, 7, 14];
    if (plan != 0 && plan != 1 && plan != 2)
      return error400(res, "plan is not valid");

    let finfo = await getFilmDetail(fid);
    if (finfo == null) return error400(res, "fid is not found");
    firebase
      .auth()
      .verifyIdToken(token)
      .then(async function (decodedToken) {
        let email = decodedToken.email;
        const info = await getInfoByMail(res, email);

        if (info.unlockFilm != undefined)
          Object.values(info.unlockFilm).map((e) => {
            if (e.end < Date.now()) info.unlockFilm[e.fid] = null; // clean phim het han
          });

        if (
          info.unlockFilm == undefined ||
          info.unlockFilm[fid] == undefined ||
          info.unlockFilm[fid] == null
        ) {
          if (finfo.price * (plan + 1) > info.coin)
            return error400(res, "not enough coin");
          if (info.unlockFilm == undefined)
            info.unlockFilm = {
              [fid]: {
                end: Date.now() + 1000 * 60 * 60 * 24 * planDay[plan],
                fid: parseInt(fid),
              },
            };
          else
            info.unlockFilm[fid] = {
              end: Date.now() + 1000 * 60 * 60 * 24 * planDay[plan],
              fid: parseInt(fid),
            };
          messagesRef
            .child("users/" + info.code)
            .update({
              coin: info.coin - finfo.price * (plan + 1),
              unlockFilm: info.unlockFilm,
            })
            .then(() => {
              return res.json({
                complete: true,
                total: info.coin - finfo.price * (plan + 1),
                info: info.unlockFilm[fid],
              });
            });
        } else return error400(res, "exist");
      })
      .catch((e) => {
        console.log(e);
        return error403(res);
      });
  } catch {
    console.log(e);
    return error500(res);
  }
});

router.post("/savefilm", async (req, res) => {
  try {
    const { token, fid } = req.body;
    let finfo = await getFilmById(fid);
    if (finfo == null) return error400(res, "fid is not found");

    firebase
      .auth()
      .verifyIdToken(token)
      .then(async function (decodedToken) {
        let email = decodedToken.email;
        const info = await getInfoByMail(res, email);
        // if (
        //   info.saveFilm != undefined &&
        //   Object.keys(info.saveFilm).length >= 12
        // )
        //   return error400(res, "max 12 film");
        if (info.saveFilm == undefined || info.saveFilm[fid] == undefined) {
          if (
            info.saveFilm != undefined &&
            Object.keys(info.saveFilm).length >= 12
          )
            return error400(res, "max 12 film");
          else
            messagesRef
              .child("users/" + info.code + "/saveFilm/" + fid)
              .update({
                fid: parseInt(fid),
              })
              .then(() => {
                return res.json({ complete: "added", fid: fid });
              });
        } else
          messagesRef
            .child("users/" + info.code + "/saveFilm/" + fid)
            .set(null)
            .then(() => {
              return res.json({ complete: "removed", fid: fid });
            });
      })
      .catch((e) => {
        console.log(e);
        return error403(res);
      });
  } catch {
    console.log(e);
    return error500(res);
  }
});

router.post("/report", (req, res) => {
  const { token, content } = req.body;
  firebase
    .auth()
    .verifyIdToken(token)
    .then(async function (decodedToken) {
      let email = decodedToken.email;
      messagesRef
        .child("report")
        .push({ user: email, timestamp: Date.now(), content: content })
        .then(() => {
          return res.send("okok");
        })
        .catch((e) => {
          return error500(res);
        });
    })
    .catch(function (error) {
      return error403(res);
    });
});

//sign in
function sendMail(to, code, displayName) {
  var transporter = nodemailer.createTransport({
    // service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
      user: "kphim.contact@gmail.com",
      pass: "bcoikowevijxbjla",
    },
  });
  var mailOptions = {
    from: "kphim.contact@gmail.com",
    to: to,
    subject: "Xác thực tài khoản KPHIM",
    html:
      "Xin chào <b>" +
      displayName +
      "</b>, Có phải bạn muốn sử dụng Email này cho tài khoản KPHIM của mình?+" +
      "<br>Nếu bạn không làm điều này? Không sao cả, hãy bỏ qua Email này!" +
      "<br>Nếu đúng là bạn, hãy dùng mã xác thực phía dưới để xác thực tại <a href='kphim.xyz/xacthuc'>Kphim</a>" +
      "<br> Cảm ơn bạn đã đọc, <a href='kphim.xyz'>Kphim</a>" +
      "<h1>" +
      code +
      "</h1>" +
      "<img src='https://i.imgur.com/qhkDHr9.png' width ='200' alt='logo kphim'></img>",
  };
  transporter.sendMail(mailOptions, function (error, info) {
    // if (error != null) {
    console.log(error);
    console.log(info);
    // }
  });
}

router.post("/signup", async (req, res, next) => {
  try {
    const { newmail, newpassword, name, img } = req.body;
    const info = await getInfoByMail(res, newmail);
    if (info == null) {
      let signUpCode = Math.random().toString(36).substring(6);
      addNewUsers(res, newmail, signUpCode);
      // if (checkURL(img))
      if (true)
        firebase.auth().createUser({
          email: newmail,
          emailVerified: false,
          password: newpassword,
          displayName: name,
          photoURL:
            "https://ik.imagekit.io/lambai/image_mid_q6-SYDsmM.jpg?ik-sdk-version=react-1.0.11&tr=w-150",
          disabled: false,
        });
      // else
      //   firebase.auth().createUser({
      //     email: newmail,
      //     emailVerified: false,
      //     password: newpassword,
      //     displayName: name,
      //     photoURL:
      //       "https://www.seekpng.com/png/small/138-1387819_admin-login-icon-png-number-four.png",
      //     disabled: false,
      //   });
      sendMail(newmail, signUpCode, name);
      res.send("okok");
    } else res.send("exist");
  } catch (err) {
    next(err);
  }
});

router.post("/checkverifcode", async (req, res, next) => {
  try {
    const { token, code } = req.body;
    firebase
      .auth()
      .verifyIdToken(token)
      .then(async function (decodedToken) {
        if (decodedToken.email_verified) {
          return res.send("email_verified");
        } else {
          const info = await getInfoByMail(res, decodedToken.email);
          if (info.signup === code) {
            firebase
              .auth()
              .updateUser(decodedToken.uid, { emailVerified: true })
              .then(() => {
                res.send("okok");
                messagesRef
                  .child("users/" + info.code)
                  .update({ signup: null });
              })
              .catch((e) => console.log(e));
          } else {
            return res.send("false");
          }
        }
      })
      .catch(function (error) {
        return error403(res);
      });
  } catch (err) {
    next(err);
  }
});

router.get("/testmail", async (req, res, next) => {
  sendMail(
    "pffgia1@gmail.com",
    "signUpCode",
    "Đây là một mã khác dành cho bạn!"
  );
  res.send("okok");
});

router.post("/resendmail", async (req, res, next) => {
  try {
    const { token } = req.body;
    firebase
      .auth()
      .verifyIdToken(token)
      .then(async function (decodedToken) {
        if (decodedToken.email_verified) {
          return res.send("email_verified");
        } else {
          const info = await getInfoByMail(res, decodedToken.email);
          let signUpCode = Math.random().toString(36).substring(6);
          if (info == null) addNewUsers(res, decodedToken.email, signUpCode);
          else {
            messagesRef
              .child("users/" + info.code)
              .update({ signup: signUpCode });
            sendMail(
              decodedToken.email,
              signUpCode,
              "Đây là một mã khác dành cho bạn!"
            );
            res.send("okok");
          }
        }
      })
      .catch(function (error) {
        return error403(res);
      });
  } catch (err) {
    next(err);
  }
});

router.put("/naptienpaypal", async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const { coin } = req.body;
    firebase
      .auth()
      .verifyIdToken(token)
      .then(async function (decodedToken) {
        if (decodedToken) {
          const info = await getInfoByMail(res, decodedToken.email);
          firebase
            .auth()
            .updateUser(decodedToken.uid, { emailVerified: true })
            .then(() => {
              messagesRef
                .child("users/" + info.code)
                .update({ coin: info.coin + parseInt(coin) })
                .then((ret) => {
                  res.send(ret);
                })
                .catch((e) => {
                  error500(res);
                });
            })
            .catch((e) => error403(res));
        } else return error403(res);
      })
      .catch(function (error) {
        return error403(res);
      });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
