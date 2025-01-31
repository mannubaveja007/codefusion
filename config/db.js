require('dotenv').config(); 

const mongoose = require('mongoose');


const connectDB = async () => {
  try {
    console.log("MongoDB URI:", process.env.MONGO_URI); 
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
