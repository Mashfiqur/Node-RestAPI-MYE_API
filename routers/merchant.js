// First create router
const express = require('express');
const TokenGenerator = require('uuid-token-generator');
const merchantRouter = new express.Router();
// get the model from src/models folder
const Merchant = require('../models/merchant');


//Create Post route to insert through Merchant model into collection
merchantRouter.post('/api/merchants', async(req,res) =>{
    try{
        const tokgen = new TokenGenerator();
        const tokgen2 = new TokenGenerator(256, TokenGenerator.BASE62);
        const insertMerchant = new Merchant({
            "name": req.body.name,
            "email": req.body.email,
            "merchant_uid": tokgen.generate(),
            "mye_access_token": tokgen2.generate()
        });
        const insert_merchant = await insertMerchant.save();
        res.status(201).send({
            "result": "success",
            "code": 201,
            "message": "Merchant has been added to MYE API!",
            "payload": insert_merchant
        });
    }
    catch(e) {
        res.status(400).send(e);
    }
});


//Get all Merchant list
merchantRouter.get('/api/merchants', async(req,res) =>{
    try{
        const get_all_merchants = await Merchant.find();
        res.status(200).send({
            "result": "success",
            "code": 200,
            "message": "Successfully retrieved all merchants!",
            "payload": get_all_merchants
        });
        
    }
    catch(e) {
        res.status(400).send(e);
    }
});



module.exports = merchantRouter;