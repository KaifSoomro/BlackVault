export const checkVaultAccess = async (req, res, next) => {
  try {
    if (
      !req.user.passwordAccessVerified ||
      !req.user.passwordAccessExpiresAt ||
      req.user.passwordAccessExpiresAt < Date.now()
    ) {
      return res.status(403).json({
        success: false,
        message: "Vault is locked",
      });
    }

    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error in checkVaultAccess",
      error: error.message,
    });
  }
};