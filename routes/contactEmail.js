import express from "express";
import { reactEmailSend } from "../controllers/contactEmail";

const router = express.Router();

// User Routes
router.post("/send-email", reactEmailSend);

export default router;
