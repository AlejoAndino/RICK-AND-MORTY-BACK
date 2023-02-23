const express = require('express');
const server = express();
const PORT = 3001;
const router = require('./routes/index');
const morgan = require('morgan');
const cors = require('cors');

server.use(express.json());
server.use(morgan('dev'));
server.use(cors());

server.use('/rickandmorty', router)

server.listen(PORT, () => {
    console.log(`Server raised in PORT: ${PORT}`);
});