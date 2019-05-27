const express = require("express");

const router = express.Router();

const aaa = [
  "apple",
  "avatar",
  "aluminium",
  "arzentia",
  "atom",
  "alita",
  "arya",
  "amazon",
  "azolla",
  "alligator",
  "ant",
  "america",
  "alpaca",
  "abra",
  "absol",
  "Alakazam",
  "alibaba",
  "arbok",
  "articuno",
  "aron",
  "armaldo",
  "ariados",
  "arcanine",
  "altaria",
  "atlantica",
  "atlus",
  "aerodactyl",
  "avocado",
  "apricot",
  "akee",
  "abir"
];

const bbb = [
  "art",
  "tagblender",
  "artist",
  "artistic",
  "artists",
  "arte",
  "dibujo",
  "myart",
  "artwork",
  "illustration",
  "graphicdesign",
  "graphic",
  "color",
  "colour",
  "colorful",
  "painting",
  "drawing",
  "drawings",
  "markers",
  "paintings",
  "watercolor",
  "watercolour",
  "ink",
  "creative",
  "sketch",
  "sketchaday",
  "pencil",
  "cs6",
  "photoshop",
  "beautiful"
];




router.post("/", async (req, res) => {
  console.log("url", req);
  console.log("REQ BODY == = ", req.body);

  try {
    if (!req.body || !req.body.data) {
      return res.status(400).json({ msg: "Server Error" });
    }
    let result =
      req.body.data.length > 0 && aaa.filter(e => e.includes(req.body.data));
    console.log(result);

    res.json(result);
  } catch (err) {
    res.status(400).json({ msg: "Server Error" });
  }
});

router.post("/send", async (req, res) => {
  try {
    console.log(req.body.data);
    res.json(bbb);
  } catch (err) {
    res.json({ msg: "Server Error" });
  }
});

module.exports = router;
