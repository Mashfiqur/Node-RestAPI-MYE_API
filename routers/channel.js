// First create router
const express = require('express');
const TokenGenerator = require('uuid-token-generator');
const channelRouter = new express.Router();
// get the model from src/models folder
const Channel = require('../models/merchant');
const Merchant = require('../models/merchant');

//Create Post route to insert through Channel model into collection
channelRouter.post('/api/channels', async(req,res) =>{    
    try{
        const tokgen = new TokenGenerator();
        if(req.headers.merchant_uid && req.headers.mye_access_token){
            const merchant_info = await Merchant.find({ merchant_uid: req.headers.merchant_uid, mye_access_token: req.headers.mye_access_token });
            // res.send({name: merchant_info.name})
            const insertChannel = new Channel({
                "name": req.body.name,
                "channel_uid": tokgen.generate(),
                "merchant_id": merchant_info._id,
                "country": req.body.country,
                "channel_type": req.body.channel_type
            });
            const insert_channel = await insertChannel.save();
            res.status(201).send({
                "result": "success",
                "code": 201,
                "message": "Channel has been added to MYE API!",
                "payload": insert_channel
            });
        }
        else {
            res.status(400).send({
                "result": "Bad request",
                "code": 400,
                "message": "Merchant UID and access token need in the header!"
            });
        }

    }
    catch(e) {
        res.status(400).send(e);
    }
});



//Get all Channel list
channelRouter.get('/api/channels', async(req,res) =>{
    try{
        const get_all_channels = await Channel.find();
        res.status(200).send({
            "result": "success",
            "code": 200,
            "message": "Successfully retrieved all channels!",
            "payload": get_all_channels
        });
        
    }
    catch(e) {
        res.status(400).send(e);
    }
});

module.exports = channelRouter;