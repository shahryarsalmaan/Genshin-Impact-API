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
    res.status(404).send("Character not found");
  }
});

app.get("/weapon", (req, res) => {
  // Code to retrieve weapon data and images
});

app.get("/weapon/:name", (req, res) => {
  // Code to retrieve weapon data and image for a specific weapon
});

// Add more endpoints for other types of images as needed

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});