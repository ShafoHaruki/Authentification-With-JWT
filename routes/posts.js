const router = require("express").Router();
//verify is a middleware to protect the route
const verify = require("./verifyToken");

router.get("/", verify, (req, res) => {
  req.send(req.user);
  // res.json({
  //   posts: {
  //     title: "My first post",
  //     description: "Random data that you cannot access without a token",
  //   },
  // });
});

module.exports = router;
