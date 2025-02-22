import express from "express";
// import multer from "multer";
import Notice from "../models/Notice.js";
import upload from "../middlewares/Notice.js";
import { sendMail } from "../utils/NoticeCreateEmail.js";

const router = express.Router();

// // Set up Multer for file uploads
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "noticePhotos");
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + "-" + file.originalname);
//     },
// });

// const upload = multer({ storage: storage });

// Create|| add a new notice 
router.post("/create", upload.single("photo"), async (req, res) => {
  const { title } = req.body;
  const photo = req.file ? req.file.path : "";
  try {
    const newNotice = new Notice({ title, photo });
    //new id generate
    const lastNotice = await Notice.findOne().sort({ id: -1 });
    newNotice.id = lastNotice ? (lastNotice.id += 1) : 1;
    await newNotice.save();
    await sendMail(
      "Welcome to MERN-AUTH-REDUX-TOOLKIT",
      `<p>Dear ${newNotice.title} </p>,
    
          Thank you for registering for a ${newNotice._id} MERN-AUTH-REDUX-TOOLKIT account. We are excited to have you on board.</p>
          
          <p>If you have any questions or need assistance, please feel free to reach out to our support team.</p>
          
          <p>Thank you,
          The MERN-AUTH-REDUX-TOOLKIT Team</p>`
    );
    res.status(201).json(newNotice);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Read all notices
router.get("/all", async (req, res) => {
  try {
    const notices = await Notice.find();
    res.status(200).json(notices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Read a single notice by ID and views count
router.get("/:id", async (req, res) => {
  try {
    const notice = await Notice.findById(req.params.id);
    if (notice) {
      notice.views += 1;
      await notice.save();
    }
    if (!notice) return res.status(404).json({ message: "Notice not found" });
    res.status(200).json(notice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.get("/:id/like", async (req, res) => {
  try {
    const notice = await Notice.findById(req.params.id);
    if (notice) {
      notice.likes += 1;
      await notice.save();
    }
    if (!notice) return res.status(404).json({ message: "Notice not found" });
    res.status(200).json(notice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update a notice by ID
router.put("/:id", upload.single("photo"), async (req, res) => {
  const { title } = req.body;
  const photo = req.file ? req.file.path : "";
  try {
    const notice = await Notice.findByIdAndUpdate(
      req.params.id,
      { title, photo },
      { new: true, runValidators: true }
    );
    if (!notice) return res.status(404).json({ message: "Notice not found" });
    res.status(200).json(notice);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a notice by ID
router.delete("/:id", async (req, res) => {
  try {
    const notice = await Notice.findByIdAndDelete(req.params.id);
    if (!notice) return res.status(404).json({ message: "Notice not found" });

    res.status(200).json({ message: "Notice deleted" });
    await sendMail(
      "Notice Deletion from MERN-AUTH-REDUX-TOOLKIT",
      `<p>Dear ${notice.title},</p>
      
          <p>We regret to inform you that your notice with the ID: ${notice._id} has been deleted from your MERN-AUTH-REDUX-TOOLKIT account.</p>
          
          <p>If you have any questions or need assistance, please feel free to reach out to our support team.</p>
          
          <p>Thank you,
          The MERN-AUTH-REDUX-TOOLKIT Team</p>`
    );
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
