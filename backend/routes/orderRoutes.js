const express = require("express");
const router = express.Router();
const Order = require("../models/Order");
const { json2csv } = require("json-2-csv");

// Get all paid orders
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find({ paymentStatus: "paid" }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Export orders to CSV
router.get("/export", async (req, res) => {
  try {
    const orders = await Order.find({ paymentStatus: "paid" }).lean();
    
    if (orders.length === 0) {
      return res.status(404).send("No paid orders found to export.");
    }

    // Flatten items for Excel
    const flatOrders = orders.map(o => ({
      Date: new Date(o.createdAt).toLocaleString(),
      Customer: o.customerName,
      Phone: o.customerPhone,
      Table: o.tableNumber || "N/A",
      Items: o.items.map(i => `${i.name} (x${i.quantity})`).join(", "),
      Amount: o.totalAmount,
      PaymentID: o.razorpayPaymentId
    }));

    const csv = json2csv(flatOrders);
    
    res.header("Content-Type", "text/csv");
    res.attachment(`PizzaDome_Orders_${new Date().toISOString().split('T')[0]}.csv`);
    res.send(csv);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
