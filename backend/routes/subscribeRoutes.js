const express = require("express");
const Subscriber = require("../models/Subscriber");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Handle newsletter subscription

router.post("/subscribe", async (req,res)=>{
    const {email} = req.body;

    if(!email){
        return res.status(400).json({message: "Email is required"});
    }
    try{
        // check if the email is already subscribed
         let subscriber = await Subscriber.findOne({ email });
         if(subscriber){
            return res.status(400).json({ message:"email is already subscribed"})
         };

        //  create new subscriber
        subscriber = new Subscriber({ email });
        await subscriber.save();

        res.status(201).json({message:"successfully subscribed to the newsLetter!"});
    } catch(error){
        console.error(error);
        res.status(500).send("Server Error");
    }
})

module.exports = router;