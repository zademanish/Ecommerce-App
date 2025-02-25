const express = require("express");
const Order = require("../models/Order");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();


// get all orders (Admin only)

router.get("/", protect, admin, async (req, res)=>{
    try{
        const orders = await Order.find({}).populate("user", "name email");
        res.json(orders);
    } catch(error){
        console.error(error);
        res.status(500).send("Server Error");
    }
});

// update order status

router.put("/:id", protect,admin, async (req,res)=>{
    try{
        const order = await Order.findById(req.params.id).populate("user", "name");
        if(order){
            order.status = req.body.status || order.status;
            order.isDelivered = req.body.status === "Delivered" ? true : order.isDelivered;
            order.deliveredAt = req.body.status === "Delivered" ? Date.now() : order.deliveredAt;
            
            const updatedOrder = await order.save();
            res.json(updatedOrder);    
        } else{
            res.status(404).json({message: "order not found"})
        }
    } catch(error){
        console.error(error);
        res.status(500).send("Server Error");
    }
})

// Delete an order 

router.delete("/:id", protect, admin, async (req,res)=>{
    try{
        const order = await Order.findById(req.params.id);
        if(order){
            await order.deleteOne();
            res.json({message: "Order remove"})
        }else{
            res.status(404).json({message: "order not found"})
        }
    } catch(error){
        console.error(error);
        res.status(500).send("Server Error");
    }
})

module.exports = router