import dotenv from "dotenv";

dotenv.config();

export const environmentVariables = {
  Port: process.env.Port!,
  Mongodb_string: process.env.MongoDb_Local!,
};
