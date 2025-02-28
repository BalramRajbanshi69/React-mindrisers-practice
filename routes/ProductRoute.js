const express = require("express");
const FetchUser = require("../middleware/FetchUser");
const ProductModal = require("../model/ProductModal");
const router = express.Router();
const { body, validationResult } = require("express-validator");

// create or add products
router.post(
  "/addproduct",
  FetchUser,
  body("title", "Enter a valid title").isLength({ min: 3 }),
  body("description", "Enter a valid description").isLength({ min: 5 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });
    }
    try {
      const { title, price, description, inStock } = req.body;
      if (!title || !price || !description || !inStock) {
        return res.status(400).json({ error: "Please fill all the fields" });
      }
      // let image = req.files.map((file) => {
      //   return file.filename;
      // });
      const product = await ProductModal.create({
        title,
        price,
        description,
        inStock,
        // image,
        user: req.user.id,
      });
      const saveProduct = await product.save();
      res
        .status(201)
        .json({ message: "Product added successfully", product: saveProduct });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

// get all products -> all login users
router.get("/getallproducts", FetchUser, async (req, res) => {
  try {
    const products = await ProductModal.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// specific login user that have added products
router.get("/getloginproducts", FetchUser, async (req, res) => {
  try {
    const products = await ProductModal.find({ user: req.user.id });
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// get single product
// router.get("/getproducts/:id", fetchUser, async (req, res) => {
//   try {
//     const id = req.params.id;
//     const products = await ProductModel.findById(id);
//     res.status(200).json({ success: true, data: products });
//   } catch (error) {
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// update product
router.put("/updateproduct/:id", FetchUser, async (req, res) => {
  try {
    const id = req.params.id;
    const { title, price, description, inStock } = req.body;
    if (!title || !price || !description || !inStock) {
      return res.status(400).json({ error: "Please fill all the fields" });
    }
    const newProduct = {};
    if (title) newProduct.title = title;
    if (price) newProduct.price = price;
    if (description) newProduct.description = description;
    if (inStock) newProduct.inStock = inStock;
    let product = await ProductModal.findByIdAndUpdate(id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    if (!product.user || product.user.toString() !== req.user.id) {
      return res.status(401).json({ error: "You are not authorized" });
    }
    product = await ProductModal.findByIdAndUpdate(
      id,
      { $set: newProduct },
      { new: true }
    );
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// delete product
router.delete("/deleteproduct/:id", FetchUser, async (req, res) => {
  try {
    const id = req.params.id;
    let product = await ProductModal.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    if (!product.user || product.user.toString() !== req.user.id) {
      return res.status(401).json({ error: "You are not authorized" });
    }
    res
      .status(200)
      .json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
