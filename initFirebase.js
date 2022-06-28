var firebase = require("firebase-admin");
var serviceAccount = require("./firebaseKey.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL:
    "https://kphim2-default-rtdb.asia-southeast1.firebasedatabase.app",
});
module.exports.firebase = firebase;

