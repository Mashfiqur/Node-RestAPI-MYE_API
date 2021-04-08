const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-double')(mongoose);
 
const SchemaTypes = mongoose.Schema.Types;
const Order = require('./order');


const orderitemSchema = new Schema({
    order: { type: Schema.Types.ObjectId, ref: 'Order'},
    sku:{
        type: String,
        required: true,
        trim: true
    },
    quantity:{
        type: Number,
        required: true,
    },
    currency:{
        type: String,
        required: true,
        trim: true
    },
    total_amount:{
        type: SchemaTypes.Double,
        required: true
    },
    unit_price:{
        type: SchemaTypes.Double,
        required: true
    }
}, { timestamps: true });

//Create a new collection
const OrderItem = new mongoose.model("OrderItem", orderitemSchema);

// export this model
module.exports = OrderItem;
