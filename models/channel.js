const express = require('express');
const mongoose = require('mongoose');
const Merchant = require('./merchant');

const channelSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true //before and after the name string remove spaces
    },
    channel_uid:{
        type: String,
        required: true,
        trim: true
    },
    user_id: { type: Schema.Types.ObjectId, ref: 'Merchant' },
    country:{
        type: String,
        required: true,
        trim: true
    },
    channel_type:{
        type: String,
        required: true,
        trim: true
    }
}, { timestamps: true });

//Create a new collection
const Channel = new mongoose.model("Channel", channelSchema);

// export this model
module.exports = Channel;
