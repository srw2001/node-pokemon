const express = require('express')
const authMiddleware = require('../middlewares/auth.middleware');
const router = express.Router()

const { createPokemonBulk , 
    findAllPokemons,
    FindOnePokemon,
    UpdateOnePokemon 
} = require('../controllers/pokemon.controller');

router.post('/create', authMiddleware , createPokemonBulk);
router.get('/',authMiddleware, findAllPokemons);
router.get('/:id',authMiddleware, FindOnePokemon);
router.put('/:id', authMiddleware , UpdateOnePokemon);

module.exports = router;