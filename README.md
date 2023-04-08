# Genshin Impact API for XaviaBot

This is an API for the popular game Genshin Impact, designed to be used with XaviaBot. It provides information about characters in the game, including their names and images.

## Endpoints

### `GET /:lang/character`

Returns a list of character names and images in the specified language.

#### Parameters

- `lang` (required): The language to return the data in. Currently supported languages are `en` (English) and `ar` (Arabic).

#### Response

Returns a JSON object with the following properties:

- `names`: An array of character names.
- `images`: An array of character images.

### `GET /:lang/character/:name`

Returns information about a specific character in the specified language.

#### Parameters

- `lang` (required): The language to return the data in. Currently supported languages are `en` (English) and `ar` (Arabic).
- `name` (required): The name of the character to retrieve information for.

#### Response

Returns a JSON object with the following properties:

- `name`: The name of the character.
- `image`: The image of the character.
- `description`: A brief description of the character.
- `rarity`: The rarity of the character.
- `element`: The element of the character.
- `weapon`: The weapon type of the character.

### Error Handling

If a character is not found, a 404 error will be returned with the message "Character not found". For all other errors, a 500 error will be returned with the message "Something broke!".

## Usage

To use this API, simply make a GET request to one of the endpoints listed above. For example, to get a list of character names and images in English, make a GET request to `/en/character`.

## Credits

This API was created by Shahryar Salmaan. The character data was sourced from Genshin Arab. 

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for details.
