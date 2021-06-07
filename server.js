// Dependecies
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const PORT = 3000;
const Product = require('./models/products.js');

// Database Configuration
const DATABASE_URL = 'mongodb+srv://admin:abc1234@cluster0.r1pjk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const db = mongoose.connection;

// Connect to MongoDB Atlas
mongoose.connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
});

// Database Connection Error/Success
// Define callback functions for various events
db.on('error', (err) => console.log(err.message + ' is mongod not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));

// Listener
app.listen(PORT, () => console.log(`express is listening on port: ${PORT}`));