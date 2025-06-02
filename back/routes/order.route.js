const router = require("express").Router();
const Order = require("../models/order.model");
const Cart = require("../models/cart.model");
const isAuth = require("../middlewares/isAuth");

router.post("/", isAuth, async (req, res) => {
  const userId = req.userId;

  const cart = await Cart.findOne({ userId });
  if (!cart || cart.items.length === 0) {
    return res.status(400).json({ error: "Cart is empty" });
  }

  const total = cart.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const order = await Order.create({
    userId,
    items: cart.items,
    total,
  });

  await Cart.findOneAndDelete({ userId });

  res.status(201).json({ message: "Order placed", order });
});

module.exports = router;
