//adding express
const express = require('express');
const app = express();

//configuring dotenv
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT;

//configuring cors
const cors = require('cors')

//configuring readdirSync from fs
const {readdirSync} = require('fs');

//adding db from dbConfig.js
const {db} = require('./db/dbConfig');

//exports
const router = require('./routes/transactions');

//middlewares
app.use(express.json());
app.use(cors())

//routes
readdirSync('./routes').map((route)=> app.use('/api', require('./routes/' + route)))

//awaiting for db to be established using async/await
const startServer = async () => {
    try {
        await db();
        app.listen(PORT, () => {
            console.log(`Listening to PORT ${PORT}`);
        });
    } catch (error) {
        console.error('Failed to start the server due to DB connection issues:', error.message);
    }
};

startServer();