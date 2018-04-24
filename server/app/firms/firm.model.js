const Joi = require('joi');
const mongoose = require('mongoose');

const Firm = mongoose.model('Firm', new mongoose.Schema({
    name: {
        type: String,
        minlength: 5,
        maxlength: 50,
        required: true
    },
    regDate: {
        type: Date,
        default: Date.now
    }
}));

function validateFirm(firm) {
    const schema = {
        name: Joi.string().min(5).required()
    };
    return Joi.validate(firm, schema);
}

module.exports.Firm = Firm;
module.exports.validate = validateFirm;