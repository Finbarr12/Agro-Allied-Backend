import { Document, Schema, model } from "mongoose";

interface Prod {
  name: string;
  Quantity: number;
  price: number;
  ProductImage: string;
  createdAt: Date;
}

export interface Iproducts extends Prod, Document {}

const ProductSchema: Schema<Iproducts> = new Schema(
  {
    name: {
      type: String,
      required: [true, "Input a name"],
    },
    Quantity: {
      type: Number,
      required: [true, "Input a Quantity"],
    },
    price: {
      type: Number,
      required: [true, "Input a Price"],
    },
    ProductImage: {
      type: String,
      required: true,
    },
    createdAt: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);

export default model<Iproducts>("products", ProductSchema);
