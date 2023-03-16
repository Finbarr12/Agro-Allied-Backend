import { Request, Response } from "express";
import FarmerModel, { Ifarmer } from "../Model/FarmerModel";
import bcrypt from "bcrypt";

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

    const salt = await bcrypt.genSalt(12);
    const HasedPass = await bcrypt.hash(salt, password);

    const farmer = await FarmerModel.create({
      name,
      email,
      password: HasedPass,
      confirmPassword: HasedPass,
      farmerImage,
      BVN,
      location,
    });
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

export const LoginFarmer = async (
  req: Request<{}, {}, Ifarmer>,
  res: Response
) => {
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
