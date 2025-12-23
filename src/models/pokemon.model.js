const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({

    pokedex_no: { 
        type: Number, 
        unique: true 
    },
    name: { 
        type: String, 
        required: true
    },
    generation: {
        type: Number,
        required: true
    },
    types: {
        type: [String],
        required: true
    },
    is_legendary: {
        type: Boolean,
        required: true
    },
    base_stats: {
        hp: { type: Number, required: true },
        attack: { type: Number, required: true },
        defense: { type: Number, required: true },
        speed   : { type: Number, required: true },
    },
    height: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: null
    },
    deletedAt: {
        type: Date,
        default: null
    }
});

module.exports = mongoose.model('Pokemon', pokemonSchema);