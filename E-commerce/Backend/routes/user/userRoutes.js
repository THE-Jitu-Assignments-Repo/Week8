const { registerUser, loginUser } = require('../../controllers/users/usersController')

const router = require('express').Router()



router.post('/register', registerUser)
router.post('/login', loginUser)


module.exports= router