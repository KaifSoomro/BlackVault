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

export const unlockVault = async (req, res) => {
  const { masterPassword } = req.body;

  const user = await User.findById(req.user._id);

  const isMatch = await bcrypt.compare(masterPassword, user.masterPassword);

  if (!isMatch) {
    return res.status(401).json({
      success: false,
      message: "Invalid master password",
    });
  }

  user.passwordAccessVerified = true;
  user.passwordAccessExpiresAt = new Date(Date.now() + 60 * 60 * 1000);

  await user.save();

  return res.status(200).json({
    success: true,
    message: "Vault unlocked successfully",
  });
};

export const getAccounts = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    
    const accounts = await Accounts.find({ userId: req.user._id });
    if (accounts.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No accounts added yet.",
      });
    }

    if (
      !user.passwordAccessVerified ||
      !user.passwordAccessExpiresAt ||
      user.passwordAccessExpiresAt < Date.now()
    ) {
      return res.status(403).json({
        success: false,
        message: "Vault is locked",
      });
    }

    const allAccounts = accounts.map((account) => {
      const bytes = CryptoJS.AES.decrypt(
        account.password,
        process.env.ENCRYPTION_KEY,
      );

      const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

      return {
        ...account._doc,
        password: originalPassword,
      };
    });

    return res.status(200).json({
      success: true,
      accounts: allAccounts,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error in getAccounts",
      error: error.message,
    });
  }
};
