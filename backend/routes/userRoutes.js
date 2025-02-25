const express = require('express');
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const {protect} = require("../middleware/authMiddleware")

const router = express.Router();

router.post("/register", async (req,res)=>{
    const {name, email, password} = req.body;
    try{

        let user = await User.findOne({ email });

        if(user) return res.status(400).json({message:"User already exists"});

        user = new User({name, email, password});
        await user.save();

        // create JWT payload
        const payload = {user: { id: user._id, role:user.role }};

        // sign and return the token long with user data

        jwt.sign(payload, process.env.JWT_SECRET, {expiresIn:"40h"},(err,token)=>{
            if(err) throw err;

            // send the user and token in response
            res.status(201).json({
                user:{
                    _id: user._id,
                    name:user.name,
                    email:user.email,
                    role:user.role,
                },
                token
            })
        })

    } catch(error){
        console.log(error);
        res.status(500).send("Server Error");
    }
})


// Login route 

router.post("/login", async (req,res)=>{
    const {email, password} = req.body;
   
    try{
    let user = await User.findOne({ email });
     if(!user) return res.status(400).json({message:"Invalid creadentials"});
     const isMatch = await user.matchPassword(password);
     if(!isMatch) return res.status(400).json({message:"Invalid credentials"});

      // create JWT payload
      const payload = {user: { id: user._id, role:user.role }};

      // sign and return the token long with user data

      jwt.sign(payload, process.env.JWT_SECRET, {expiresIn:"40h"},(err,token)=>{
          if(err) throw err;

          // send the user and token in response
        return res.json({
              user:{
                  _id: user._id,
                  name:user.name,
                  email:user.email,
                  role:user.role,
              },
              token
          })
      })
    } catch(error){
        console.error(error);
        res.status(500).send("Server Error");
    }
})

// user Profile

router.get("/profile",protect, async(req,res)=>{
    res.json(req.user)
})


module.exports = router;