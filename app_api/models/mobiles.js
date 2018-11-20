var mongoose = require('mongoose');

var mobileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    details: String,
    feature: String,
    screentype: String,
    screensize: String,
    screenratio: String
});

mongoose.model('Mobile', mobileSchema);
