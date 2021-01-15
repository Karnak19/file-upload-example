const express = require("express");

const emojis = require("./emojis");
const upload = require("./upload");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.use("/upload", upload);
router.use("/emojis", emojis);

module.exports = router;
