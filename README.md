# Genshin-Impact-API

A RESTful API for retrieving Genshin Impact character and weapon data and images.

## Description

This API provides endpoints for accessing character and weapon information, as well as image links for each character and weapon in Genshin Impact.

## Endpoints

- `/api`: Returns a JSON object containing the names and image links of all the Genshin Impact characters.
- `/api/character/:name`: Returns a JSON object containing the name and image link of the specified Genshin Impact character.
- `/api/weapon/:name`: Returns a JSON object containing the name and image link of the specified Genshin Impact weapon.

## Usage

To use this API, send a GET request to one of the endpoints listed above. The response will be a JSON object containing the requested data.

## Credits

This API was created by Shahryar Salmaan.
