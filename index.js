const express = require('express');
require('./database/connection');
require('dotenv').config();

// Link Routers
const merchantRouter = require('./routers/merchant');
const channelRouter = require('./routers/channel');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

//Routers use
app.use(merchantRouter,channelRouter);




//Base route
app.get('/', async(req,res) =>{
    res.send("Hello what's up! Lets make a rest API for manage your ecommerce.");
})



app.listen(port,() =>{console.log(`Connection is running at http://127.0.0.1:${port}`)});