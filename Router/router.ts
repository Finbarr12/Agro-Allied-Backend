import { Router } from "express";
import ViewImage from "../config/multer";
import {
  AllAdmin,
  CreateAdmin,
  LoginAdmin,
} from "../controllers/AdminController";
import {
  AllFarmers,
  CreateFarmer,
  LoginFarmer,
} from "../controllers/FarmersControllers";
import { TransMail } from "../controllers/Mailer";
import {
  CreateProduct,
  UpdateProduct,
} from "../controllers/ProductsController";
import { LoginUser, RegisterUser } from "../controllers/UserController";

const router = Router();

router.post("/loginUser", LoginUser);
router.post("/registerUser", RegisterUser);
router.post("/registerFarmer", ViewImage, CreateFarmer);
router.post("/loginFarmer", LoginFarmer);
router.post("/registeradmin", CreateAdmin);
router.get("/alladmin", AllAdmin);
router.post("/loginadmin", LoginAdmin);
router.get("/allfarmers", AllFarmers);
router.patch("/updateProduct/:ProductID", UpdateProduct);
router.post("/createproducts/:farmerID", ViewImage, CreateProduct);
router.post("/mailer", TransMail);

export default router;
