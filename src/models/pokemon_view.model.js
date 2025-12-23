const mongoose = require('mongoose');

const pokemonView = new mongoose.Schema({
    pokemon_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pokemon',
        required: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    viewAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('PokemonView', pokemonView);