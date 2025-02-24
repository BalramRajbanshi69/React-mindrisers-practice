const express = require("express");
const FetchUser = require("../middleware/FetchUser");
const ProductModal = require("../model/ProductModal");
const router = express.Router();
const { body, validationResult } = require("express-validator");

router.get("/getallproduct", FetchUser, async (req, res) => {
  try {
    const product = await ProductModal.find({ user: req.user.id });
    res.json(product);
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error!" });
  }
});

router.post(
  "/addproduct",
  FetchUser,
  [
    // Validation middleware
    body("title")
      .isLength({ min: 3 })
      .withMessage("Title must be at least 3 characters"),
    body("price")
      .isNumeric()
      .withMessage("Price must be a number")
      .notEmpty()
      .withMessage("Price is required"),
    body("description")
      .isLength({ min: 8 })
      .withMessage("Description must be at least 8 characters"),
    body("inStock")
      .isNumeric()
      .withMessage("Stock must be a number")
      .notEmpty()
      .withMessage("Stock quantity is required"),
  ],
  async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    try {
      // Destructure request body
      const { title, description, price, inStock } = req.body;

      let image = req.files.map((file)=>{
        return file.filename;
      })

      // Create new product
      const product = new ProductModal({
        title,
        description,
        price,
        inStock,
        image,
        user: req.user.id, // Link product to authenticated user
      });

      // Save to database
      const savedProduct = await product.save();

      // Send success response
      res.status(201).json({
        success: true,
        message: "Product created successfully",
        product: savedProduct,
      });
    } catch (error) {
      console.error("Product creation error:", error);
      res.status(500).json({
        success: false,
        message: "Internal Server Error!",
      });
    }
  }
);

// update product
router.put("/updateproduct/:id", FetchUser, async (req, res) => {
  const { title, description, price, inStock } = req.body;
  try {
    const newProduct = {};
    if (title) {
      newProduct.title = title;
    }
    if (description) {
      newProduct.description = description;
    }
    if (price) {
      newProduct.price = price;
    }
    if (inStock) {
      newProduct.inStock = inStock;
    }

    let product = await ProductModal.findByIdAndUpdate(req.params.id);
    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }
    if (!product.user || product.user.toString() !== req.user.id) {
      return res.status(401).send("not allowed");
    }
    product = await ProductModal.findByIdAndUpdate(
      req.params.id,
      { $set: newProduct },
      { new: true }
    );
    res.json({ msg: "Product updated successfully", product });
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error!" });
  }
});

// delete product
router.delete("/deleteproduct/:id", FetchUser, async (req, res) => {
  try {
    let product = await ProductModal.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: "product not found" });
    }
    if (product.user.toString() !== req.user.id) {
      return res.status(401).send("not allowed");
    }
    product = await ProductModal.findByIdAndDelete(req.params.id);
    res.json({ success: "product has been deleted", product: product });
  } catch (error) {
    res.status(500).send("internal server error");
  }
});

module.exports = router;
