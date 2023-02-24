const express = require('express');
const router = express.Router();
const { getCharById } = require('../controllers/getCharById');
const { getCharByDetail } = require('../controllers/getCharByDetail');
const { getAllChars } = require('../controllers/getAllChars')
const favs = require('../utils/favs');

router.get("/onsearch/:id", getCharById);

router.get("/detail/:detailId", getCharByDetail);

router.get('/allCharacters', async (req, res) => {
    try {
        const allCharacters = await getAllChars(); 
        res.status(200).json(allCharacters);   
    } 
    catch (error) {
        res.status(400).send('Hubo un error en /all')
    }
});

router.post('/fav', (req, res) => {
    favs.push(req.body);
    res.status(200).send("Se guardo a favoritos el personaje");
})

router.get('/fav', (req, res) => {
    res.status(200).json(favs);
})

router.delete('/fav/:id', (req, res) => {
    const { id } = req.params;

    const charFiltered = favs.filter(char => char.id !== Number(id));
    favs = charFiltered;
    
    res.status(200).send("El personaje se elimino de favoritos");
})

module.exports = router;