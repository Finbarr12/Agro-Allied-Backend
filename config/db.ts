import mongoose from "mongoose";
import { environmentVariables } from "../env/environment";

const Uri = environmentVariables.Mongodb_string;

export const DbConnect = async () => {
  try {
    const conn = await mongoose.connect(Uri);
    console.log(`Db is connected to ${conn.connection.host}`);
  } catch (error) {
    console.log("error occured", error);
  }
};
