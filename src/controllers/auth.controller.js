const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('../models/user.model')

exports.login = async (req, res) => {

  let { username , password } = req.body

  const user = await User.findOne({ username: username })
  if (!user) {
    return res.status(400).json({
      message: 'Invalid username or password',
      status: false,
    })
  }

  const isMatch = await bcrypt.compare(password, user.password)
  if (!isMatch) {
    return res.status(400).json({
      message: 'Invalid username or password',
      status: false,
    })
  }

  const token = jwt.sign({ id: user._id , role: user.role}, process.env.JWT_SECRET)
  user.token = token

  await user.save()
  
  return res.status(200).json({
    message: 'success',
    status: true,
    data: user,
    token: token
  })
}

exports.Register = async (req, res) => {

  let { username , password , email , role } = req.body

  const userExist = await User.findOne({ username: username })
  if (userExist) {
    return res.status(400).json({
      message: 'Username already exists',
      status: false,
    })
  }

  if (username.length < 4) {
    return res.status(400).json({
      message: 'Username must be at least 4 characters',
      status: false,
    })
  }

  // hash password 
  const hashedPassword = await bcrypt.hash(password, 10)

  // save to database
  const newUser = new User({
    username: username,
    password: hashedPassword,
    email: email,
    role: role
  });

  // save to database
  await newUser.save()

  return res.status(200).json({
    message: 'success',
    status: true,
    data: newUser
  })
}

exports.ReadEmployee = async (req, res) => {
  return res.status(200).json({
    message: 'success',
    status: true,
    data: user
  })
}
