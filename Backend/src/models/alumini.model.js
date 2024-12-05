import mongoose from "mongoose";

const AlumniSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    education: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    yearOfPassout: {
      type: String,
      required: true,
    },
    profession: {
      type: String,
      required: true,
    },
    profile: {
      type: String, 
    },
    coverImage: {
      type: String, 
    },
    refreshToken: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const Alumni = mongoose.model("Alumni", AlumniSchema);
