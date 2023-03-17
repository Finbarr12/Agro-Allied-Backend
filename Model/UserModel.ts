import { Document, Schema, model } from "mongoose";

interface User {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
}

export interface Iuser extends User, Document {}

const UserSchema: Schema<Iuser> = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please input your name"],
    },
    email: {
      type: String,
      required: [true, "Please input an email"],
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "Input a password"],
      minlength: [6, "Minimum of six characters"],
    },
    confirmPassword: {
      type: String,
      required: [true, "Input a password"],
      minlength: [6, "Minimum of six characters"],
    },
    role: { type: String, enum: ["admin", "user"], default: "user" },
  },
  {
    timestamps: true,
  }
);

export default model<Iuser>("Userdb", UserSchema);
