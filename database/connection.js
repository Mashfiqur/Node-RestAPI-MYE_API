const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DATABASE_URL,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() =>{
    console.log("Mongo DB has started the connection!");
}).catch((err)=>{
    console.log("Mongo has rejected the connection! Because: "+err);
})