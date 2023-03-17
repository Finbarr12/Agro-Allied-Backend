import mongoose, { Document, Schema, model } from "mongoose";

interface Admin {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
  users: {}[];
  farmers: {}[];
  wallet: {}[];
  transactionHistory: {}[];
  overallProductsSold: {}[];
  AllOrders: {}[];
  role: string;
  Mailer: {}[];
}

interface Iadmin extends Admin, Document {}

const AdminSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Userdb",
    },
  ],
  farmers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Farmerdb",
    },
  ],
  wallet: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "wallet",
    },
  ],
  transactionHistory: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "transc",
    },
  ],
  overallProductsSold: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "overall",
    },
  ],
  AllOrders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "allorders",
    },
  ],
  role: { type: String, enum: ["admin", "user"], default: "admin" },
  Mailer: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "emails",
    },
  ],
});

export default model<Iadmin>("admin", AdminSchema);
