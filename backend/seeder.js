const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/Product');
const User = require('./models/User');
const Cart = require('./models/Cart');
const products = require('./data/products');

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

// function to seed data

const SeedData = async ()=>{
    try{
        // Clear Existing data
        await Product.deleteMany();
        await User.deleteMany();
        await Cart.deleteMany();

        // Create a Default admin User
        const createdUser = await User.create({
            name: "Admin User",
            email:"admin@example.com",
            password:"123456",
            role:"admin",
        });

        // Assign the default user Id to each product
        const userID = createdUser._id;

        const sampleProducts = products.map((product)=>{
            return {...product, user: userID};
        })
        // insert the product into database
        await Product.insertMany(sampleProducts);
        console.log("Product data seeded successfully");
        process.exit();

    } catch(error){
        console.error("Error seeding the data:", error);
        process.exit(1);
    }
}

SeedData();