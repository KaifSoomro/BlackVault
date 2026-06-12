import "dotenv/config";
import mongoose from "mongoose";

const connectDB = () => {
  try {
    mongoose
      .connect(process.env.MONGODB_URL)
      .then(() => {
        console.log("Connected to Database")
      })
      .catch((error) => console.log(error.message));
  } catch (error) {
    return console.log("Error connecting with Database");
  }
};

export default connectDB;
