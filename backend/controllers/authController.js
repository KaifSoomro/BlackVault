import User from "../models/userSchema.js";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
  try {
    const { fullName, userName, email, password, confirmPassword } = req.body;

    if (!fullName || !userName || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({
        success: false,
        message: "Email already taken.",
      });
    }

    const existingUser = await User.findOne({ userName });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Username already taken.",
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 8 characters long.",
      });
    }

    let hashedPassword;
    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Password and Confirm Password must match.",
      });
    } else {
      hashedPassword = await bcrypt.hash(password, 10);
    }

    const newUser = await User.create({
      fullName: fullName,
      userName: userName,
      email: email,
      password: hashedPassword,
    });

    return res.status(201).json({
      success: true,
      message: "Account created successfully.",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error in signup",
      error: error.message,
    });
  }
};
