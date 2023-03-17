import { Request, Response } from "express";
import AdminModel from "../Model/AdminModel";
import bcrypt from "bcrypt";
import FarmerModel from "../Model/FarmerModel";
import mongoose from "mongoose";
import UserModel from "../Model/UserModel";

export const CreateAdmin = async (req: Request, res: Response) => {
  try {
    const { name, email, password, isAdmin } = req.body;

    const salt = await bcrypt.genSalt(12);
    const HashedPass = await bcrypt.hash(password, salt);

    const RegisterAdmin = await AdminModel.create({
      name,
      email,
      password: HashedPass,
      isAdmin: true,
    });
    return res.status(200).json({
      message: "Success",
      data: RegisterAdmin,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error occured",
      data: error,
    });
  }
};

export const LoginAdmin = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const AdminEntry = await AdminModel.findOne({ email });

    if (!AdminEntry) {
      return res.status(404).json({
        message: "User dosen't exist",
      });
    }
    const comparePass = await bcrypt.compare(password, AdminEntry?.password);

    if (!comparePass) {
      return res.status(404).json({
        message: "User dosen't exist",
      });
    }
    return res.status(200).json({
      message: `Logged in ${AdminEntry?.name} successfully`,
      data: AdminEntry,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error occured",
      data: error,
    });
  }
};

export const AllAdmin = async (req: Request, res: Response) => {
  try {
    const Alladmins = await AdminModel.find().populate("Farmerdb");

    res.status(200).json({
      message: "Success",
      data: Alladmins,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error occured",
      data: error,
    });
  }
};
