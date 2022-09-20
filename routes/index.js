var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/profile", function (req, res, next) {
  res.json({ name: "John", age: 30, job: "Software Developer" });
});

module.exports = router;
