#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];
const characterId = '18';

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  try {
    const data = JSON.parse(body);
    const films = data.results;

    let count = 0;

    for (const film of films) {
      for (const character of film.characters) {
        if (character.includes(`/people/${characterId}/`)) {
          count++;
          break;
        }
      }
    }

    console.log(count);
  } catch (parseError) {
    console.error(parseError);
  }
});
