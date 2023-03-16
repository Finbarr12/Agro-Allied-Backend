import { Request, Response } from "express";
import mongoose from "mongoose";
import FarmerModel from "../Model/FarmerModel";
import ProductsModel from "../Model/ProductsModel";

export const CreateProduct = async (req: Request, res: Response) => {
  try {
    const { name, Quantity, price, ProductImage } = req.body;
    const FarmerName = await FarmerModel.findById(req.params.farmerID).populate(
      { path: "products" }
    );
    if (!FarmerName) {
      return res.status(200).json({ message: "Access deneied" });
    }

    console.log(FarmerName);


    const creation = await ProductsModel.create({
      name,
      Quantity,
      price,
      ProductImage,
    });

    FarmerName?.products.push(new mongoose.Types.ObjectId(creation._id));
    FarmerName?.save();

    return res.status(200).json({
      message: "Created successful",
      data: creation,
    });
  } catch (error: any) {
    return res.status(400).json({
      message: "An error occured",
      data: error.message,
    });
  }
};
