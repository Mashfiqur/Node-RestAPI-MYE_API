const express = require('express');
require('./database/connection');
require('dotenv').config();
// const mensrouter = require('../src/routers/mens');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
// app.use(mensrouter);


//Base route
app.get('/', async(req,res) =>{
    res.send("Hello what's up! Lets make a rest API for manage your ecommerce.");
})



app.listen(port,() =>{console.log(`Connection is running at http://127.0.0.1:${port}`)});