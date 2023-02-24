const express = require('express');
const server = express();
const PORT = 3001;
const router = require('./routes/index');
const morgan = require('morgan');
const cors = require('cors');
const saveApiData = require('./controllers/saveApiData');
const { sequelize } = require('./DB_connection');

server.use(express.json());
server.use(morgan('dev'));
server.use(cors());

server.use('/rickandmorty', router);

sequelize.sync({ force: true }).then( async () => {
    console.log("DB conectada");
    console.log(saveApiData());
    await saveApiData();
    server.listen(PORT, () => {
        console.log(`Server raised in PORT: ${PORT}`);
    });
})

