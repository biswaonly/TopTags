const express = require("express");

const router = express.Router();

const auth = require("../../middlewares/auth");
const User = require("../../models/User");

router.get("/", auth, async (req, res) => {
  console.log("2 REQ BODY == ", req.body);

  try {
    let result = await User.findById(req.ssid);

    console.log("3 RESULT == ", result);

    if (!result) {
      console.log(" NO RESULT ");

      return res.status(400).json({ msg: "Authorization Denied" });
    }

    res.status(200).json({ userAuthentication: true });
  } catch (err) {
    res.status(500).json({ msg: "Server Error" });
  }
});

module.exports = router;
