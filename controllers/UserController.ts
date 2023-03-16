import { Request, Response } from "express";
import UserModel, { Iuser } from "../Model/UserModel";

export const RegisterUser = async (
  req: Request<{}, {}, Iuser>,
  res: Response
): Promise<Response> => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    const Registered = await UserModel.create({
      name,
      email,
      password,
      confirmPassword,
    });

    return res.status(200).json({
      message: "Registered successfully",
      data: Registered,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error occured",
      data: error,
    });
  }
};

export const LoginUser = async (
  req: Request<{}, {}, Iuser>,
  res: Response
): Promise<Response> => {
  try {
    const { email, password } = req.body;

    const Registered = await UserModel.findOne({ email });
    if (!Registered) {
      return res.status(200).json({ message: "Users dosen't exsist" });
    }
    return res.status(200).json({
      message: "Loggedin successfully",
      data: Registered,
    });
  } catch (error) {
    return res.status(400).json({
      message: "An error occured",
      data: error,
    });
  }
};
