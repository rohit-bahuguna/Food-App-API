const express = require('express');
const userRouter = express.Router();
const {LogIn , getAllUser , signUp} = require('../Controllers/UserController')

userRouter.post('/login', LogIn)
userRouter.post('/signUp' , signUp)
userRouter.get('/getalluser' , getAllUser)

module.exports = userRouter;