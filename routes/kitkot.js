const express = require("express");
const router = express.Router();
const { error500, error400, error403 } = require("../util/res");
const verifyToken = require("../middleware/auth");
const { firebase } = require("../initFirebase");

let messagesRef = firebase.database().ref();

// NEW EDIT
router.get("/all", async (req, res) => {
  try {
    messagesRef
      .child("/kitkot")
      .get()
      .then((snap) => {
        let a = snap.val();
        res.send(a);
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

router.post("", async (req, res) => {
  try {
    const data = req.body.data;
    console.log(data);
    messagesRef
      .child("kitkot")
      .push(data)
      .then(() => res.send("okok"));
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


module.exports = router;
