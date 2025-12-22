const express = require('express');
const app = express();

app.use(express.json()); // ← ต้องมาก่อน routes
const router = express.Router()

router.use('/auth', require('./auth.route'))
router.use('/pokemon', require('./pokemon.route'))

module.exports = router
