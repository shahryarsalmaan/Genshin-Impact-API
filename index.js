const express = require("express");
const characters = require("./characters");

const app = express();

app.get("/", (req, res) => {
  res.send("Genshin Impact API for XaviaBot!");
});

app.get("/character", (req, res) => {
  const characterNames = characters.map((character) => character.name);
  const characterImages = characters.map((character) => character.image);
  const characterData = {
    names: characterNames,
    images: characterImages
  };
  res.json(characterData);
});

app.get("/character/:name", (req, res) => {
  const characterName = req.params.name.toLowerCase();
  const character = characters.find((character) => character.name.toLowerCase() === characterName);
  if (character) {
    res.json(character);
  } else {
    const error = new Error('Character not found');
    error.status = 404;
    next(error);
  }
});

app.get("/weapon", (req, res) => {
  // Code to retrieve weapon data and images
});

app.get("/weapon/:name", (req, res) => {
  // Code to retrieve weapon data and image for a specific weapon
});

// Add more endpoints for other types of images as needed

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Something broke!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
