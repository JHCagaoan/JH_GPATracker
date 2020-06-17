require('dotenv').config();
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const database = require("./models/database");

const app = express();
try {
    database.connect();
} catch(e) {console.log(e);}

app.use(bodyparser.json());
app.use(cors());

//Routes
const indexRoutes = require("./routes/indexRoutes");
app.use('/api', indexRoutes);


//App.listen
const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Server started on port ${port}`);
});