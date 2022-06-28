const express = require("express");
const router = express.Router();
const { error500, error400, error403 } = require("../util/res");
const { firebase } = require("../initFirebase");

let messagesRef = firebase.database().ref();

// NEW EDIT
router.get("/all", async (req, res) => {
  try {
    messagesRef
      .child("newscontent")
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

router.get("/page/:id/:key", async (req, res) => {
  try {
    const { key, id } = req.params;
    if (key == 0 && id == 0) {
      messagesRef
        .child("newscontent")
        .limitToLast(3)
        .get()
        .then((snap) => {
          let a = snap.val();
          res.send(a);
        });
    } else {
      messagesRef
        .child("newscontent")
        .orderByChild("id")
        .endBefore(id, key)
        .limitToLast(4)
        .get()
        .then((snap) => {
          let a = snap.val();
          res.send(a);
        });
    }
  } catch (error) {
    console.log(error);
    return error500(res);
  }
});

router.get("/new/:id", async (req, res) => {
  try {
    const { id } = req.params;
    messagesRef
      .child("newscontent")
      .orderByChild("id")
      .equalTo(id)
      .get()
      .then((snap) => {
        let a = snap.val();
        res.send(a);
      })
      .catch((e) => {
        console.log(e)
           return error500(res);
      });
  } catch (error) {
    console.log(error);
    return error500(res);
  }
});

// END NEW

module.exports = router;
