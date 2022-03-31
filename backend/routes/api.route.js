const router = require("express").Router();
const { TwitterApi } = require("twitter-api-v2");
const client = new TwitterApi({
  appkey: process.env.API_KEY,
  appSecret: process.env.API_KEY_SECRET,
  accessToken: process.env.ACCESS_TOKEN_KEY,
  accessSecret: process.env.ACCESS_TOKEN_SECRET,
});

router.get("/post", async (req, res, next) => {
  try {
    res.status(200).send("user");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
});

module.exports = router;
