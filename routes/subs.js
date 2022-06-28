const express = require("express");
const router = express.Router();
const fs = require("fs");

const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/subs/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

router.get("/:name", async (req, res) => {
  let path = "public/subs/" + req.params.name;
  fs.readFile(path, "utf8", function (err, data) {
    if (err) throw err;
    res.send(data);
  });
});
router.post("/user-upload", upload.single("file"), (req, res, next) => {
  res.send(req.file.originalname);
});

module.exports = router;
