const express = require("express");
const Product = require("../models/Product");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, admin, async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      discountPrice,
      countInStock,
      category,
      brand,
      sizes,
      colors,
      collections,
      material,
      gender,
      images,
      isFeatured,
      isPublished,
      tags,
      dimensions,
      weight,
      sku,
    } = req.body;

    const product = new Product({
      name,
      description,
      price,
      discountPrice,
      countInStock,
      category,
      brand,
      sizes,
      colors,
      collections,
      material,
      gender,
      images,
      isFeatured,
      isPublished,
      tags,
      dimensions,
      weight,
      sku,
      user: req.user._id, //referemce to the admin user who created it
    });

    const createProduct = await product.save();
    res.status(201).json(createProduct);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

router.put("/:id", protect, admin, async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      discountPrice,
      countInStock,
      category,
      brand,
      sizes,
      colors,
      collections,
      material,
      gender,
      images,
      isFeatured,
      isPublished,
      tags,
      dimensions,
      weight,
      sku,
    } = req.body;

    const product = await Product.findById(req.params.id);

    if (product) {
      product.name = name || product.name;
      product.description = description || product.description;
      product.price = price || product.price;
      product.discountPrice = discountPrice || product.discountPrice;
      product.countInStock = countInStock || product.countInStock;
      product.brand = brand || product.brand;
      product.category = category || product.category;
      product.sizes = sizes || product.sizes;
      product.colors = colors || product.colors;
      product.collections = collections || product.collections;
      product.material = material || product.material;
      product.gender = gender || product.gender;
      product.images = images || product.images;
      product.isFeatured =
        isFeatured !== undefined ? isFeatured : product.isFeatured;
      product.isPublished =
        isPublished !== undefined ? isPublished : product.isPublished;
      product.tags = tags || product.tags;
      product.dimensions = dimensions || product.dimensions;
      product.weight = weight || product.weight;
      product.sku = sku || product.sku;

      const updatedProduct = await product.save();
      res.json(updatedProduct);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

router.delete("/:id", protect, admin, async (req, res) => {
  try {
    // Find the product by Id
    const product = await Product.findById(req.params.id);

    if (product) {
      // remove the product from db
      await product.deleteOne();
      res.json({ message: "Product remove" });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Errro");
  }
});

// get all products with  optional query filters

router.get("/", async (req, res) => {
  try {
    const {
      collection,
      size,
      color,
      gender,
      minPrice,
      maxPrice,
      sortBy,
      search,
      category,
      material,
      brand,
      limit,
    } = req.query;

    let query = {};

    // filter logic
    if(collection && collection.toLocaleLowerCase() !== "all") {
      query.collections = collection;
    }

    if(category && category.toLocaleLowerCase() !== "all") {
      query.category = category;
    }

    if(material){
      query.material = { $in: material.split(",") };
    }

    if(brand){
      query.brand = { $in: brand.split(",") };
    }

    if(size){
      query.sizes = { $in: size.split(",") };
    }

    if(color){
      query.colors = { $in:[color]};
    }

    if(gender) {
      query.gender = gender;    
    }

    if(minPrice || maxPrice) {
      query.price ={};
       if(minPrice) query.price.$gte = Number(minPrice);
       if(maxPrice) query.price.$lte = Number(maxPrice);
    }

    if(search) {
      query.$or = [
        {name:{ $regex: search, $options:"i"} },
        {description:{ $regex: search, $options:"i"} }
      ]
    }

    // Sort Logic
    let sort = {};

    if(sortBy) {
      switch(sortBy) {
        case "priceAsc":
          sort = {price: 1};
          break;
          case "priceDesc":
            sort = {price: -1};
            break; 
            case "popularity":
          sort = {rating: -1};
          break;
          default:
            break;
      }
    }

    // fetch product and apply sorting and limit
    let products = await Product.find(query).sort(sort).limit(Number(limit) || 0);

    res.json(products);

  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// retrive the product with higest rating

router.get("/best-seller", async(req,res)=>{
  try{
    const bestSeller = await Product.findOne().sort({rating:-1});
    if(bestSeller) {
      res.json(bestSeller);
    } else {
      res.status(404).json({message: "No best seller found"});
    }
  }catch(error){
    console.error(error);
    res.status(500).send("Server Error")
  }
});

// Retrive the latest 8 products - creation date

router.get("/new-arrivals", async (req,res)=>{
  try{
    const newArrivals = await Product.find().sort({ createdAt: -1}).limit(8);
    res.json(newArrivals);
  } catch(error){
    console.error(error);
    res.status(500).send("Server Error")
  }
})

// Get a single product by id

router.get("/:id", async(req,res)=>{
  try{
    const product = await Product.findById(req.params.id);
    if(product){
      res.json(product);
    } else{
      res.status(404).json({message: "Product Not Found"});
    }
  }catch(error){
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// retrive similar products based on the current product's gender and category

router.get("/similar/:id", async (req,res)=>{
  const {id} = req.params;
 try{
  const product = await Product.findById(id);

  if(!product){
    return res.status(404).json({message:"Product not found"});
  }

  const similarProducts = await Product.find({
    _id: {$ne: id}, //Exclude the current product id
    gender: product.gender,
    category:product.category,

  }).limit(4);

  res.json(similarProducts);
 } catch(error){
    console.error(error);
    res.status(500).send("Server Error")
 }
})


module.exports = router;
