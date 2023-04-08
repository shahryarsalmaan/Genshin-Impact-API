const express = require("express");
const characters_en = require("./characters_en");
const characters_ar = require("./characters_ar");

const app = express();

app.get("/", (req, res) => {
  res.send("Genshin Impact API for XaviaBot!");
});

app.get("/:lang/character", (req, res) => {
  const lang = req.params.lang;
  let characterData;
  switch (lang) {
    case "en":
      characterData = characters_en;
      break;
    case "ar":
      characterData = characters_ar;
      break;
    default:
      characterData = characters_en;
  }
  const characterNames = characterData.map((character) => character.name);
  const characterImages = characterData.map((character) => character.image);
  const characterDataResponse = {
    names: characterNames,
    images: characterImages
  };
  res.json(characterDataResponse);
});

app.get("/:lang/character/:name", (req, res, next) => {
  const lang = req.params.lang;
  const characterName = req.params.name.toLowerCase();
  let characterData;
  switch (lang) {
    case "en":
      characterData = characters_en;
      break;
    case "ar":
      characterData = characters_ar;
      break;
    default:
      characterData = characters_en;
  }
  const character = characterData.find((character) => character.name.toLowerCase() === characterName);
  if (character) {
    const characterImage = character.image;
    res.json({ ...character, image: characterImage });
  } else {
    const error = new Error('Character not found');
    error.status = 404;
    next(error);
  }
});

// Add endpoints for other types of images as needed

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Something broke!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
