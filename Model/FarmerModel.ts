import mongoose, { Document, Schema, model } from "mongoose";

interface Farmer {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  farmerImage: string;
  products: {}[];
  location: string;
  BVN: number;
  wallet: {}[];
}

interface Ifarmer extends Farmer, Document {}

const FarmerSchema: Schema<Ifarmer> = new Schema({
  name: {
    type: String,
    required: [true, "Please input your name"],
  },
  email: {
    type: String,
    required: [true, "Please input your email"],
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, "Please input your password"],
    minlength: [6, "Minimum of 6 letters"],
  },
  confirmPassword: {
    type: String,
    required: [true, "Please input confirm password"],
    minlength: [6, "Minimum of 6 letters"],
  },
  farmerImage: {
    type: String,
    required: [true, "Upload your image"],
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "products",
    },
  ],
  wallet: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "wallets",
    },
  ],
  location: {
    type: String,
    required: [true, "Input your location"],
  },
  BVN: {
    type: Number,
    required: [true, "Input your location"],
  },
});

export default model<Ifarmer>("Farmerdb", FarmerSchema);
