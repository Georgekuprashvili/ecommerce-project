const express = require("express");
const connectToDb = require("./db/connectToDb");
const productModel = require("./models/product.model");
const { isValidObjectId } = require("mongoose");
const allproductsModel = require("./models/allproducts.model");
const app = express();

connectToDb();
app.use(express.json());

app.get("/api/products", async (req, res) => {
  const products = await productModel.find();

  res.json(products);
});

app.post("/api/products", async (req, res) => {
  const { name, price, description, quantity } = req.body;

  if (!name || !price || !description || !quantity) {
    return res.status(400).json({ error: "fill required fields " });
  }
  const createdProduct = await productModel.create({
    name,
    price,
    description,
    quantity,
  });
  res.status(201).json({ message: "product created successfully" });
});

app.get("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    return res.status(400).json({ error: "wrong id is provided" });
  }
  const product = await productModel.findById(id);
  if (!product) {
    return res.status(404).json({ error: "product not found" });
  }
  res.json(product);
});

app.delete("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    return res.status(400).json({ error: "wrong id is provided" });
  }

  const deletedProduct = await productModel.findByIdAndDelete(id);
  if (!deletedProduct) {
    return res.status(404).json({ error: "product not found" });
  }
  res.json({ message: "product deleted successfully", data: deletedProduct });
});

app.put("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    return res.status(400).json({ error: "wrong id is provided" });
  }
  const { name, price, description, quantity } = req.body;
  const updatedProduct = await productModel.findByIdAndUpdate(
    id,
    {
      name,
      price,
      description,
      quantity,
      $inc: { __v: 1 },
    },
    { new: true }
  );
  if (!updatedProduct) {
    return res.status(404).json({ error: "product not found" });
  }
  res.json({ message: "product deleted successfully", data: updatedProduct });
});

///////////////////////////////////////////////////////

app.get("/api/admin", async (req, res) => {
  const products = await allproductsModel.find();
  res.json(products);
});

app.post("/api/admin", async (req, res) => {
  const { name, slug, price, description, isNew, features, includes, others } =
    req.body;
  if (
    !name ||
    !price ||
    !description ||
    !slug ||
    !isNew ||
    !features ||
    !includes
  ) {
    return res.status(400).json({ error: "fill required fields " });
  }
  const createdProduct = await allproductsModel.create({
    name,
    slug,
    price,
    description,
    isNew,
    features,
    includes,
    others,
  });
  res.status(201).json({ message: "product created successfully" });
});

app.get("/api/admin/:id", async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    return res.status(400).json({ error: "wrong id is provided" });
  }
  const product = await allproductsModel.findById(id);
  if (!product) {
    return res.status(404).json({ error: "product not found" });
  }
  res.json(product);
});

app.delete("/api/admin/:id", async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    return res.status(400).json({ error: "wrong id is provided" });
  }

  const deletedProduct = await allproductsModel.findByIdAndDelete(id);
  if (!deletedProduct) {
    return res.status(404).json({ error: "product not found" });
  }
  res.json({ message: "product deleted successfully", data: deletedProduct });
});

app.put("/api/admin/:id", async (req, res) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) {
    return res.status(400).json({ error: "wrong id is provided" });
  }
  const { name, slug, price, description, isNew, features, includes, others } =
    req.body;
  const updatedProduct = await allproductsModel.findByIdAndUpdate(
    id,
    {
      name,
      slug,
      price,
      description,
      isNew,
      features,
      includes,
      others,
      $inc: { __v: 1 },
    },
    { new: true }
  );
  if (!updatedProduct) {
    return res.status(404).json({ error: "product not found" });
  }
  res.json({ message: "product deleted successfully", data: updatedProduct });
});

app.listen(4000, () => {
  console.log("running on http://localhost:4000");
});
