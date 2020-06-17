const express = require('express');
const router = express();

const ic = require('../controllers/indexController'); 

//Get grades
router.get("/", ic.getHome);

//Add grade

//Modify Grade

//Delete grade

module.exports = router;