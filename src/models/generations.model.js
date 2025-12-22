const mongoose = require('mongoose');

const generationSchema = new mongoose.Schema({

    generation: {
        type: String,
        required: true
    },
    region: {
        type: String,
        required: true
    },
    pokemon_count: {
        type: Number,
        required: true
    },
    release_year: {
        type: Number,
        required: true
    },
});