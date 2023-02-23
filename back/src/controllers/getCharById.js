const axios = require('axios');

const getCharById =  async function(req, res) {
    try {
        const { id } = req.params;
        const response = await axios(`https://rickandmortyapi.com/api/character/${id}`);
        const data = response.data
        const character = {
            id: data.id,
            name: data.name,
            species: data.species,
            image: data.image,
            gender: data.gender
        }
        res.status(200).json(character)
    } 
    catch (error) {
        res.status(404).send("Algo salió mal")
    }

}

module.exports = {
    getCharById
}