import { transporter } from "../config/email/VerifyTransporter.js";
import User from "../models/userSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
  try {
    const { fullName, userName, email, password, confirmPassword, masterPin } =
      req.body;

    if (!fullName || !userName || !email || !password || !masterPin) {
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

    if (masterPin.length !== 6) {
      return res.status(400).json({
        success: false,
        message: "Master PIN must be exactly 6 digits.",
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

    const hashedMasterPin = await bcrypt.hash(masterPin, 10);

    const token = jwt.sign({ email }, process.env.SECRET_KEY, {
      expiresIn: "10h",
    });

    await User.create({
      fullName: fullName,
      userName: userName,
      email: email,
      password: hashedPassword,
      masterPin: hashedMasterPin,
    });

    const verificationLink = `${process.env.FRONTEND_URL}/verify/${token}`;
    await transporter.sendMail({
      from: process.env.USER_EMAIL,
      to: email,
      subject: "Verify Your Email Address",
      html: `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
          padding: 20px;
        }

        .container {
          max-width: 600px;
          margin: auto;
          background: #ffffff;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 0 20px rgba(0,0,0,0.1);
          text-align: center;
        }

        h1 {
          color: #4f46e5;
        }

        p {
          color: #555;
          line-height: 1.6;
        }

        .btn {
          display: inline-block;
          margin-top: 20px;
          padding: 14px 28px;
          background: linear-gradient(135deg, #6366f1, #06b6d4);
          color: #fff !important;
          text-decoration: none;
          border-radius: 8px;
          font-weight: bold;
        }

        .footer {
          margin-top: 30px;
          font-size: 12px;
          color: #999;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Email Verification</h1>

        <p>
          Thank you for signing up! Please verify your email address
          by clicking the button below.
        </p>

        <a href="${verificationLink}" class="btn">
          Verify Email
        </a>

        <p style="margin-top:20px;">
          If the button doesn't work, copy and paste this link into your browser:
        </p>

        <p>
          <a href="${verificationLink}">
            ${verificationLink}
          </a>
        </p>

        <div class="footer">
          This link will expire in 10 hours.
        </div>
      </div>
    </body>
    </html>`,
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

export const verifyEmail = async (req, res) => {
  try {
    const { token } = req.params;
    if (!token) {
      return res.status(404).json({
        success: false,
        message: "Token not found",
      });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    const user = await User.findOne({ email: decoded.email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid token",
      });
    }

    if (user.isVerified === true) {
      return res.status(200).json({
        success: true,
        message: "Email already verified",
      });
    }

    user.isVerified = true;
    await user.save();

    return res.status(200).json({
      success: true,
      message: "Verification successfull",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error in verifyEmail",
      error: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    if (user.isVerified !== true) {
      return res.status(400).json({
        success: false,
        message: "Please verify your email before login.",
      });
    }

    const verifyPassword = await bcrypt.compare(password, user.password);
    if (!verifyPassword) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "7d",
    });

    return res.status(200).json({
      success: true,
      message: "Login successful.",
      token,
      user: {
        _id: user._id,
        fullName: user.fullName,
        userName: user.userName,
        email: user.email,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error in login",
      error: error.message, // remove when production
    });
  }
};
