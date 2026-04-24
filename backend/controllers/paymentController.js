const crypto = require("crypto");
const razorpay = require("../config/razorpay");
const Order = require("../models/Order");

// POST /api/payment/create-order
const createOrder = async (req, res, next) => {
  try {
    const { amount, items, customerName, customerPhone, tableNumber } = req.body;

    const amountPaise = Math.round(amount * 100);

    if (amountPaise < 100) {
      return res.status(400).json({ success: false, message: "Minimum order amount is ₹1." });
    }

    // 1️⃣ Create order on Razorpay
    const razorpayOrder = await razorpay.orders.create({
      amount: amountPaise,
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
      notes: {
        customerName,
        customerPhone,
        tableNumber
      },
    });

    // 2️⃣ Persist a "pending" order in MongoDB
    const order = await Order.create({
      razorpayOrderId: razorpayOrder.id,
      customerName,
      customerPhone,
      tableNumber,
      items: items.map(i => ({
        name: i.name,
        quantity: i.qty,
        price: i.total / i.qty,
        addons: i.addons || [],
        size: i.size
      })),
      totalAmount: amount,
      paymentStatus: "pending",
    });

    return res.status(201).json({
      success: true,
      order: {
        id: razorpayOrder.id,
        amount: razorpayOrder.amount,
        currency: razorpayOrder.currency,
      },
      dbOrderId: order._id,
    });
  } catch (error) {
    next(error);
  }
};

// POST /api/payment/verify
const verifyPayment = async (req, res, next) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = req.body;

    const body = `${razorpay_order_id}|${razorpay_payment_id}`;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest("hex");

    const isAuthentic = crypto.timingSafeEqual(
      Buffer.from(expectedSignature),
      Buffer.from(razorpay_signature)
    );

    if (!isAuthentic) {
      await Order.findOneAndUpdate(
        { razorpayOrderId: razorpay_order_id },
        { paymentStatus: "failed" }
      );

      return res.status(400).json({
        success: false,
        message: "Payment verification failed.",
      });
    }

    const updatedOrder = await Order.findOneAndUpdate(
      { razorpayOrderId: razorpay_order_id },
      {
        razorpayPaymentId: razorpay_payment_id,
        paymentStatus: "paid",
      },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      message: "Order confirmed! 🍕",
      orderId: updatedOrder._id,
    });
  } catch (error) {
    next(error);
  }
};

const getOrder = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id).lean();
    if (!order) return res.status(404).json({ success: false, message: "Order not found." });
    return res.status(200).json({ success: true, order });
  } catch (error) {
    next(error);
  }
};

module.exports = { createOrder, verifyPayment, getOrder };
