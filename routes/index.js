var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.json("Yooooooooo !");
});

router.get("/profile", function (req, res, next) {
  res.json({ name: "John", age: 30, job: "Software Developer" });
});

console.log("test");

module.exports = router;
