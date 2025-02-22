import mongoose from "mongoose";

const noticeSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      default: 11223344,
    },
    title: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      //   required: true,
    },
    views: {
      type: Number,
      default: 50,
    },
    likes: {
      type: Number,
      default: 50,
    },
  },
  { timestamps: true }
);
export default mongoose.model("Notice", noticeSchema);
