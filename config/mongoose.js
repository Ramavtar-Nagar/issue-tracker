const mongoose = require('mongoose');
const url = 'mongodb+srv://pollingApi:pollingcodingninjas@cluster0.kkgjrwx.mongodb.net/pollingAPI';
mongoose.connect(url);
const db = mongoose.connection;

// If any error occurs than for getting info. about the Error
db.on('Error', console.error.bind(console, "ERROR! while connecting to the Database"));

db.once('open', () => {
    console.log("Successfully Connected to the Database")
});

module.exports = db;