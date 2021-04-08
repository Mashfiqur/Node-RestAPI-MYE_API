const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-double')(mongoose);
 
const SchemaTypes = mongoose.Schema.Types;
const Channel = require('./channel');
const ShippingAddress = require('./order_shipping_address');

const orderSchema = new Schema({
    channel_order_id:{
        type: String,
        required: true,
        trim: true //before and after the name string remove spaces
    },
    channel: { type: Schema.Types.ObjectId, ref: 'Channel'},
    payment_status:{
        type: String,
        required: true,
        trim: true
    },
    seller_info:{
        type: String,
        required: true,
        trim: true
    },
    date:{
        type: Date,
        required:true
    },
    shipping_address:{ type: Schema.Types.ObjectId, ref: 'ShippingAddress'},
    payment_method:{
        type: String,
        required: true,
        trim: true
    },
    buyer_name:{
        type: String,
        required: true,
        trim: true
    },
    buyer_email:{
        type: String,
        required: true,
        trim: true
    },
    currency:{
        type: String,
        required: true,
        trim: true
    },
    total:{
        type: SchemaTypes.Double,
        required: true
    },
    isDispatched:{
        type: Boolean,
        default: false
    }
}, { timestamps: true });

//Create a new collection
const Order = new mongoose.model("Order", orderSchema);

// export this model
module.exports = Order;
