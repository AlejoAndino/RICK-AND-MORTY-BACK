const axios = require('axios');

const getCharByDetail = (req, res) => {
    const { id } = req.params;

    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(response => response.data)
    .then(data => {
        const character = {
            id: data.id,
            name: data.name, 
            species: data.species, 
            image: data.image, 
            gender: data.gender,
            origin: data.origin.name
        }
        res.status(200).json(character)
    })
    .catch(err => {
        res.status(400).send(err.message)
    })
}

module.exports = {
    getCharByDetail
}