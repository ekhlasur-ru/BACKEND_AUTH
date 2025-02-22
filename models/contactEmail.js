import mongoose from "mongoose";

const noticeSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      match: [/.+@.+\..+/, "Please enter a valid email address"],
      trim: true,
      lowercase: true,
      unique: true,
    },
    subject: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      //   required: true,
    },
  },
  { timestamps: true, _v: false }
);
export default mongoose.model("Email", noticeSchema);
