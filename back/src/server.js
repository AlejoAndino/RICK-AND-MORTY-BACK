const express = require('express');
const server = express();
const PORT = 3001;
const router = require('./routes/index');

server.use(express.json());

server.use('/rickandmorty', router)

server.listen(PORT, () => {
    console.log(`Server raised in PORT: ${PORT}`);
});