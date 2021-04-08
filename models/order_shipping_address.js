const express = require('express');
const mongoose = require('mongoose');

const ordershippingaddressSchema = new mongoose.Schema({
    first_name:{
        type: String,
        required: true,
        trim: true
    },
    last_name:{
        type: String,
        required: true,
        trim: true
    },
    address1:{
        type: String,
        required: true,
        trim: true
    },
    address2:{
        type: String,
        required: true,
        trim: true
    },
    city:{
        type: String,
        required: true,
        trim: true
    },
    state:{
        type: String,
        required: true,
        trim: true
    },
    postcode:{
        type: String,
        required: true,
        trim: true
    },
    country:{
        type: String,
        required: true,
        trim: true
    },
    phone:{
        type: String,
        required: true,
        trim: true
    }
}, { timestamps: true });

//Create a new collection
const OrderShippingAddress = new mongoose.model("OrderShippingAddress", ordershippingaddressSchema);

// export this model
module.exports = OrderShippingAddress;
