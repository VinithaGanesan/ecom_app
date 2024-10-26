const express = require('express');

const cors = require('cors');
const { connectToDatabase } = require('./database/dbconfig');

const HTTP_SERVER = express();

//ENABLING CORS
HTTP_SERVER.use(cors());

HTTP_SERVER.use(express.urlencoded({ extended:true}));
HTTP_SERVER.use(express.json({ extended:true}));

//configuring dotenv package
require('dotenv').config();

//DEFINING A PORT AND LISTENING TO PORT WITH EXPRESS SERVER
const PORT = process.env.DEV_SERVER_PORT;

HTTP_SERVER.listen(PORT, process.env.NODE_HOST_NAME, () => {
    console.log(`Server started successfully ${PORT}`)
});

//CONNECTING WITH DATABASE
connectToDatabase();

// ENABLING ALL ROUTES
HTTP_SERVER.use('/auth', require('./routes/authRoute'))
HTTP_SERVER.use('/category', require('./routes/categoryRoute'))
HTTP_SERVER.use('/product', require('./routes/productRoute'))



