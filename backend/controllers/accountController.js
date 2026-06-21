import User from "../models/userSchema.js";
import CryptoJS from "crypto-js";
import Accounts from "../models/accountSchema.js";

export const addAccount = async (req, res) => {
  try {
    const { websiteName, websiteUrl, email, password } = req.body;
    if (!websiteName || !websiteUrl || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    const existingAccount = await Accounts.findOne({
      userId: req.user._id,
      websiteName: websiteName.trim(),
      email: email.toLowerCase().trim(),
    });

    if (existingAccount) {
      return res.status(400).json({
        success: false,
        message: "This account already exists.",
      });
    }

    const urlPattern = /^(https?:\/\/)([\w-]+\.)+[\w-]{2,}(\/.*)?$/i;

    if (!urlPattern.test(websiteUrl.trim())) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid website URL.",
      });
    }

    const encryptedPassword = CryptoJS.AES.encrypt(
      password,
      process.env.ENCRYPTION_KEY,
    ).toString();

    await Accounts.create({
      userId: req.user._id,
      websiteName: websiteName.trim(),
      websiteUrl: websiteUrl.trim(),
      email: email.toLowerCase().trim(),
      password: encryptedPassword,
    });

    return res.status(201).json({
      success: true,
      message: "Account added successfully.",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error in addAccount",
      error: error.message,
    });
  }
};

export const getAccounts = async (req, res) => {
  try {
    const accounts = await Accounts.find({ userId: req.user._id }).select("-password");
    if (accounts.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No accounts added yet.",
      });
    }

    return res.status(200).json({
        success: true,
        accounts
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error in getAccounts",
      error: error.message,
    });
  }
};
