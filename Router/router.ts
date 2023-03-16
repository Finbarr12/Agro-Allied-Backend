import { Router } from "express";
import ViewImage from "../config/multer";
import { CreateFarmer, LoginFarmer } from "../controllers/FarmersControllers";
import { LoginUser, RegisterUser } from "../controllers/UserController";

const router = Router();

router.post("/loginUser", LoginUser);
router.post("/regiterUser", RegisterUser);
router.post("/registerFarmer", ViewImage, CreateFarmer);
router.post("/loginFarmer", LoginFarmer);

export default router;
