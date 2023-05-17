var express = require("express");
var router = express.Router();
const fs = require("fs");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/sendMessage", function (req, res, next) {
  fs.appendFileSync("./message.txt", JSON.stringify(req.body) + "\r\n");
  console.log(JSON.stringify(req.body));
});

router.get("/getMessages", function (req, res, next) {
  const file = fs.readFileSync("./message.txt", { encoding: "utf8" });
  res.send(file);
});

module.exports = router;
