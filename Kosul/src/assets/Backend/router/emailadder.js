import mongoose from "mongoose";
import Email from "../database/customermail.cjs";
import dotenv from "dotenv";
dotenv.config();

// Updated MongoDB connection URI
const mongoURI = process.env.MONGODB_URI;

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully to kosulportfolio");
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1); // Exit process on failure
  }
};

const closeConn = async () => {
  try {
    await mongoose.connection.close();
    console.log("MongoDB connection closed");
  } catch (error) {
    console.error("MongoDB connection close error:", error.message);
  }
};

const addemail = async (useremail) => {
  await connectDB();
  try {
    const user = await Email.findOne({ email: useremail });

    if (user) {
      console.log("User already exists");
    } else {
      const email = new Email({ email: useremail });
      const savedEmail = await email.save();
      console.log("Email saved:", savedEmail);
    }
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return [];
  } finally {
    await closeConn();
  }
  console.log(mongoURI);
};

export default addemail;
