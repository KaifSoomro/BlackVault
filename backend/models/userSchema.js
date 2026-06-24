import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    masterPin: {
      type: String,
      required: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    passwordAccessVerified: {
      type: Boolean,
      default: false,
    },
    passwordAccessExpiresAt: {
      type: Date,
    },
  },
  { timestamps: true },
);

const User = mongoose.model("user", userSchema);
export default User;
