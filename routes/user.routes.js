const express = require("express");
const {userModel} = require("../models/user.schema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userRouter = express.Router();
const username_user = document.getElementById("usernamep");

userRouter.post("/register",(req,res)=>{
    const username = username_user.value
    try{
        bcrypt.hash(password,4,async(err,hash)=>{
            if(err){
                res.status(200).json({err})
            }else{
                const user = new userModel({username,email,password:hash})
                await user.save();
                console.log(user);
                res.status(200).json({msg:"User registered",user})
            }
        })
    }
    catch(err){
        res.status(400).json({err});
    }
})

module.exports={
    userRouter
}