const axios = require('axios');
const { Character } = require('../DB_connection');

const getApiData = async () => {
try {
    let i = 1;
    let characters = [];

    while (i < 6) {
        let apiData = await axios(`https://rickandmortyapi.com/api/character?page=${i}`);
        characters.push(apiData);
        i++;
    }

    characters = (await Promise.all(characters)).map(res => res.data.results.map(char => {
        return {
            id: char.id,
            name: char.name,
            species: char.species,
            status: char.status,
            origin: char.origin.name,
            gender: char.gender,
            image: char.image
        }
    }))

    let allCharacters = [];
    characters.map(char => allCharacters.concat(char));

    return allCharacters;

} catch (err) {
    return {error: err.message}
}
}

const saveApiData = async () => {
    try {
        const allCharacters = await getApiData();
        await Character.bulkCreate(allCharacters);
        // bulkCreate nos permite pasarle un array de objetos y los crea todos juntos en la DB.
        return allCharacters;
    } catch (err) {
        return {error: err.message}
    }
}

module.exports = saveApiData;
