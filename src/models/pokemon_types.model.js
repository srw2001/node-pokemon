const mongoose = require('mongoose');

const pokemonTypesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    color: {
        type: String,
        required: true
    },
    weaknesses: {
        type: [String],
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});