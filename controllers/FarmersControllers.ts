import { Request, Response } from "express";
import FarmerModel, { Ifarmer } from "../Model/FarmerModel";
import bcrypt from "bcrypt";
import cloudinary from "../config/cloudinary";
import { MulterFile } from "./int";
import WalletModel from "../Model/WalletModel";
import mongoose from "mongoose";

declare global {
  namespace Express {
    interface Request {
      file: MulterFile;
    }
  }
}

export const CreateFarmer = async (
  req: Request<{}, {}, Ifarmer>,
  res: Response
) => {
  try {
    const {
      name,
      email,
      password,
      confirmPassword,
      farmerImage,
      BVN,
      location,
    } = req.body;
    const file = req.file!;
    const salt = await bcrypt.genSalt(12);
    const HasedPass = await bcrypt.hash(password, salt);
    const CloudImg = await cloudinary.uploader.upload(req!.file!.path);

    const farmer = await FarmerModel.create({
      name,
      email,
      password: HasedPass,
      confirmPassword: HasedPass,
      farmerImage: CloudImg.secure_url,
      BVN,
      location,
    });

    const CreateWallet = await WalletModel.create({
      _id: farmer?._id,
      Balance: 1200,
      debit: 0,
      credit: 0,
    });

    farmer?.wallet.push(new mongoose.Types.ObjectId(CreateWallet?._id));
    farmer?.save();

    res.status(200).json({
      message: "Successful",
      data: farmer,
    });
  } catch (error) {
    res.status(400).json({
      message: "An error occured",
      data: error,
    });
  }
};

export const LoginFarmer = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const Farmer = await FarmerModel.findOne({ email });

    const compare = await bcrypt.compare(password, Farmer?.password!);

    if (!Farmer || compare) {
      return res.status(400).json({
        message: "Incorrect input",
      });
    }

    return res.status(200).json({
      message: "Success",
      data: Farmer,
    });
  } catch (error) {
    res.status(400).json({
      message: "An error occured",
      data: error,
    });
  }
};

export const AllFarmers = async (req: Request, res: Response) => {
  try {
    const Farmers = await FarmerModel.find();

    return res.status(200).json({
      message: "Gotten all",
      data: Farmers,
    });
  } catch (error) {
    res.status(400).json({
      message: "An error occured",
      data: error,
    });
  }
};
