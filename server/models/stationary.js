const mongoose = require("mongoose");
var timestamps = require('mongoose-timestamp');



var stationarySchema = new mongoose.Schema({
   

    code: {
        type: String,
        required: true,
       
    },
    facility: {
        type: String,
        required: true,
        
    }
    ,
   
    quantity: {
        type: String,
        required: true,
        
    }
    ,type: {
        type: String,
        required: true,
        
    },weight: {
        type: String,
        required: true,
        
    },fuel: {
        type: String,
        required: true,
        
    },co2: {
        type: String,
        required: true,
        
    },ch4: {
        type: String,
        required: true,
        
    },no2: {
        type: String,
        required: true,
        
    }

});
stationarySchema.plugin(timestamps);


// createing model
const stationdb = new mongoose.model("stationaries", stationarySchema);

module.exports = stationdb;