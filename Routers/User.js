const express = require('express');
const userRouter = express.Router();

const {LogIn , getAllUser , signIn} = require('../Controllers/UserController')

userRouter.post('/login', LogIn)
userRouter.post('/signin' , signIn)
userRouter.get('/getalluser' , getAllUser)

module.exports = userRouter;