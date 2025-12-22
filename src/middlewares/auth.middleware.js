// require('dotenv').config()
const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '')
    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' })
    }

    try {
        jwtKey = process.env.JWT_SECRET
        const decoded = jwt.verify(token, jwtKey)
        req.user = decoded
        next()
    } catch (err) {
        res.status(401).json({ message: 'Token is not valid' })
    }
}