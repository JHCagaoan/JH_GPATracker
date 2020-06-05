const express = require('express');
const hbs = require('express-hbs');

require('dotenv').config();
const app = express();

app.engine("hbs", hbs().express4({
    extname: ".hbs",
    layoutsDir: __dirname + "/views/layouts",
    defaultLayout: __dirname +"/views/layouts/main.hbs",
    partialsDir: __dirname + "/views/partials"
}));

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static("public"));


//Routes

//App.listen