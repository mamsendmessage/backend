var express = require("express");
var router = express.Router();
const fs = require("fs");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/sendMessage", function (req, res, next) {
  fs.appendFileSync("./message.txt", JSON.stringify(req.body) + "\r\n");
});

module.exports = router;
