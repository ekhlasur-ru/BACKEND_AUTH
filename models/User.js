import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Username is required"],
      minlength: [3, "Username must be at least 3 characters long"],
      maxlength: [20, "Username cannot exceed 20 characters"],
      // match: [/^[a-zA-Z0-9]+$/, "Username must be alphanumeric"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      match: [/.+@.+\..+/, "Please enter a valid email address"],
      trim: true,
      lowercase: true,
      unique: true,
    },
    phoneNumber: {
      type: Number,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters long"],
    },
    profilePicture: {
      type: String,
      default: "https://www.w3schools.com/w3images/avatar2.png",
    },
    lostlogin: {
      type: Date,
      default: Date.now,
    },
    address: {
      type: Array,
    },
    isverified: {
      type: Boolean,
      default: false,
    },
    isadmin: {
      type: Boolean,
      default: false,
    },
    roll: {
      type: String,
      enum: ["NORMAL_USER", "ADMIN", "SUPERADMIN"],
    },
    verificationToken: {
      type: String,
    },
    verificationTokenExpiresAt: {
      type: Date,
    },
    resetPasswordToken: {
      type: String,
    },
    resetPasswordExpiresAt: {
      type: Date,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
