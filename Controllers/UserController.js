const userModel = require('../Model/UserSchema');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
require('dotenv').config()

const LogIn = async (req , res) => {
    
    try {
        const { name, email, password } = req.body;
        
        const user = await userModel.findOne({ email: email });
            
        if (user) {
           return  res.status(201).json({massage : "user already exist"})
        } else {

            const hashPassword = await bcrypt.hash(password, 10);

            const newUser = new userModel({
                name: name,
                email: email,
                password : hashPassword
            })

            

            const response = await newUser.save();
            const token = jwt.sign({email:response.email , id: response._id , name :response.name} , process.env.SECRET_KEY)
            res.status(200).json({ user : response , token : token});

        }

        
    } catch (error) {
        console.log(error);
        res.status(400).json({massage : error.massage})
    }
}

const signIn = async (req , res) => {

    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email: email });

        if (!user) {
            return res.status(401).json({massage : "user dose not exist please Login"})
        }

        const result = await bcrypt.compare(password, user.password)
        if (!result) {
            return res.status(400).json({massage : " Invalid password "})
        }
        const token = jwt.sign({email : user.email , id:user._id , name :user.name} , process.env.SECRET_KEY)
        res.status(200).json({user : user , token : token})
        
    } catch (error) {
        console.log(error);
        res.status(400).json({massage : error.massage})
    }
}


const getAllUser = async (req , res) => {

    try {
        const response = await userModel.find();
        res.status(200).json(response)
        
    } catch (error) {
        console.log(error);
        res.status(400).json({massage : error.massage})
    }
}

module.exports = {LogIn , getAllUser , signIn}