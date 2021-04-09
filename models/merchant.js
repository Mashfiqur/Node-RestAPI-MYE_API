const express = require('express');
const mongoose = require('mongoose');
const Channel = require('./channel');


const merchantSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true //before and after the name string remove spaces
    },
    email:{
        type: String,
        required: true,
        trim: true //before and after the name string remove spaces
    },
    merchant_uid:{
        type: String,
        required: false,
        trim: true
    },
    mye_access_token:{
        type: String,
        required: false,
        trim: true
    },
    channels:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Channel' }]
}, { timestamps: true });


// If you want to change name of timestamp column
// var thingSchema = new Schema({..}, { timestamps: { createdAt: 'created_at' } });

//Create a new collection
const Merchant = new mongoose.model("Merchant", merchantSchema);

// export this model
module.exports = Merchant;
