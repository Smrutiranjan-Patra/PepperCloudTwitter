const router = require("express").Router();
// const { TwitterApi } = require("twitter-api-v2");
// const client = new TwitterApi({
//   appkey: process.env.API_KEY,
//   appSecret: process.env.API_KEY_SECRET,
//   accessToken: process.env.ACCESS_TOKEN_KEY,
//   accessSecret: process.env.ACCESS_TOKEN_SECRET,
// });

var axios = require("axios");

router.get("/post", async (req, res, next) => {
  try {
    let searchinput = "elonmusk"
    var config = {
      method: "get",
      url: `https://api.twitter.com/2/tweets/search/recent?query=${searchinput}&max_results=25`,
      headers: {
        Authorization:
          "Bearer AAAAAAAAAAAAAAAAAAAAAFLvawEAAAAAc2dWAZG2AqRw%2ByaF%2BOegPGKuejM%3DEBzjYb4tGIQyFz8Gt0ElBkzTEPPpGhVpmSI1D7P1bdRNkkJgCa",
        Cookie:
          'guest_id=v1%3A164871349718774834; guest_id_ads=v1%3A164871349718774834; guest_id_marketing=v1%3A164871349718774834; personalization_id="v1_WJP9ydwky//z1IbPDxQIeA=="',
      },
    };

    axios(config)
      .then(function (response) {
        res.status(200).send(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
});

module.exports = router;
