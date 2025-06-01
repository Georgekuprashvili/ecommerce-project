const { Router } = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");
const isAuth = require("../middlewares/isAuth");
require("dotenv").config();

const authRouter = Router();

authRouter.post("/sign-up", async (req, res) => {
  const { fullName, email, password } = req.body;
  if (!fullName || !email || !password)
    return res.status(400).json({ error: "All fields are required" });

  const existingUser = await userModel.findOne({ email: email.toLowerCase() });
  if (existingUser)
    return res.status(400).json({ error: "User already exists" });

  const hashedPassword = await bcrypt.hash(password, 10);
  await userModel.create({
    fullName,
    email: email.toLowerCase(),
    password: hashedPassword,
  });

  res.status(201).json({ message: "User created successfully" });
});

authRouter.post("/sign-in", async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel
    .findOne({ email: email.toLowerCase() })
    .select("+password");
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(400).json({ error: "Invalid credentials" });
  }

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  res.json({ accessToken: token });
});

authRouter.get("/current-user", isAuth, async (req, res) => {
  const user = await userModel.findById(req.userId).select("-password");
  res.json(user);
});

module.exports = authRouter;
