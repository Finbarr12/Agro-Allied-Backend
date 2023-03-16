import * as Express from "express";
import { MulterFile } from "./controllers/int";

declare global {
  namespace Express {
    interface Request {
      file: MulterFile;
    }
  }
}
