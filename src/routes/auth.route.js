const express = require('express')
const router = express.Router()

const { login , ReadEmployee, Register } = require('../controllers/auth.controller')

router.post('/login', login)
router.get('/user', ReadEmployee)
router.post('/register', Register)

module.exports = router   
