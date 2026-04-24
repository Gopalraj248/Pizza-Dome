const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`✅ Database Connected: Pizza Dome is Live!`);
  } catch (error) {
    console.error(`❌ Database Connection Error: ${error.message}`);
    console.log("⚠️  Running in Offline Mode (Orders will not be saved).");
  }
};

module.exports = connectDB;
