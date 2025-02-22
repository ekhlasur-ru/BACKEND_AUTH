import multer from "multer";
const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, "public/notice");
  },
  filename: (_, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

export default upload;
