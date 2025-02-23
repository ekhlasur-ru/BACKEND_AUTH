import express from "express";
import {
  signup,
  alluser,
  alluserID,
  verifyEmail,
  login,
  resendVerificationToken,
  requestPasswordReset,
  resetPassword,
  checkAuth,
  adminAuth,
  logout,
  updateUserByID,
  deleteUserByID,
  resetNewPassword,
  requestPasswordResetWhatsapp,
} from "../controllers/Auth.js";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

// User Routes
router.post("/signup", signup);
router.post("/verify-email", verifyEmail);
router.post("/login", login);
router.post("/resend-token", resendVerificationToken);
router.post("/forget-pass", requestPasswordReset);
router.post("/forget-pass-whatsapp", requestPasswordResetWhatsapp);
router.post("/forget-pass", requestPasswordReset);
router.post("/reset-pass", resetPassword);
router.post("/add-new-pass", resetNewPassword);
router.get("/check-user", checkAuth);
router.get("/check-admin", adminAuth);
router.get("/logout", logout);
router.get("/all", alluser);
router.get("/all/:id", alluserID);
router.patch("/all/:id", updateUserByID);
router.delete("/all/:id", deleteUserByID);

// Password Reset Route

export default router;
