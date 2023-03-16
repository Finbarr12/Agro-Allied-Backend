import { Document, Schema, model } from "mongoose";

interface Prod {
  name: string;
  Quantity: number;
  price: number;
  ProductImage: string;
}

interface Iproducts extends Prod, Document {}

const ProductSchema: Schema<Iproducts> = new Schema({
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
});

export default model<Iproducts>("Prodmodel", ProductSchema);
