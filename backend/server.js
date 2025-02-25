const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv")
const connectDB = require("./config/db");
const userRoute = require('./routes/userRoutes');
const productRoute = require('./routes/productRoutes');
const cartRoute = require('./routes/cartRoutes');
const checkoutRoute = require('./routes/checkoutRoute');
const orderRoutes = require('./routes/orderRoutes')
const uploadRoutes = require('./routes/uploadRoutes')
const subscribeRoutes = require('./routes/subscribeRoutes')
const adminRoutes = require('./routes/adminRoutes')
const productAdminRoutes = require('./routes/productAdminRoutes')
const adminOrderRoutes = require('./routes/adminOrderRoutes')

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();
const PORT =process.env.PORT || 3000;

// connect db
connectDB();

app.get("/", (req,res)=>{
    res.send("Welcome to eccomrce Api")
})

// Api route
app.use("/api/users", userRoute);
app.use("/api/products",productRoute);
app.use("/api/cart",cartRoute);
app.use("/api/checkout",checkoutRoute);
app.use("/api/orders",orderRoutes);
app.use("/api/upload",uploadRoutes);
app.use("/api",subscribeRoutes);
// Admin Routes
app.use("/api/admin/users",adminRoutes);
app.use("/api/admin/products",productAdminRoutes);
app.use("/api/admin/orders",adminOrderRoutes);

app.listen(PORT, ()=>{
    console.log(`server is listening ${PORT}`);
})