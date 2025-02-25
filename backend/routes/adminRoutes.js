const express = require("express");
const User = require("../models/User");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

// Get all users (Admin Only)

router.get("/", protect,admin,async (req,res)=>{
    try{
        const users = await User.find({});
        res.json(users);
    } catch(error){
        console.error(error);
        res.status(500).send("Server Error");
    }
});

// Add a new user (Admin only);
router.post("/", protect, admin, async (req,res)=>{
    const {name, email, password, role} = req.body;

    try{
        let user = await User.findOne({ email });
        if(user){
            return res.status(400).json({message: "User already exists"});
        }

        user = new User({
            name,
            email,
            password,
            role: role || "customer"
        });

        await user.save();
        res.status(201).json({message:"User created successfully", user})

    } catch(error){
        console.error(error);
        res.status(500).json({message:"Server Error"});
    }
})

// update user information (Admin only) 
router.put("/:id", protect, admin, async (req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        if(user){
            user.name = req.body.name || user.name;
            user.email = req.body.email || user.email;
            user.role = req.body.role || user.role;
        }
        const updatedUser = await user.save();
        res.json({message: "User updated successfully", user: updatedUser});
    } catch(error){
        console.error(error);
        res.status(500).json({message:"Server Error"});
    }
});

// delete a user 

router.delete("/:id", protect,admin, async (req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        if(user){
            await user.deleteOne();
            res.json({message:"User deleted successfully"});
        } else{
            res.status(404).json({message:"User not found"})
        }

    }catch(error){
        console.error(error);
        res.status(500).json({message:"Server Error"});
    }
})

module.exports = router;