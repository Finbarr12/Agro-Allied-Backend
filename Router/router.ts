import { Router } from "express";
import ViewImage from "../config/multer";
import {
  AllFarmers,
  CreateFarmer,
  LoginFarmer,
} from "../controllers/FarmersControllers";
import { CreateProduct } from "../controllers/ProductsController";
import { LoginUser, RegisterUser } from "../controllers/UserController";

const router = Router();

router.post("/loginUser", LoginUser);
router.post("/registerUser", RegisterUser);
router.post("/registerFarmer", ViewImage, CreateFarmer);
router.post("/loginFarmer", LoginFarmer);
router.get("/allfarmers", AllFarmers);
router.post("/createproducts/:farmerID", CreateProduct);

export default router;
