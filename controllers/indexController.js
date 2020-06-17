const database = require('../models/database');
const mongoose = require('mongoose');

const indexController = {
    getHome: (req, res) =>{
        res.status(200).send("Hello!");
    }
}

module.exports = indexController;