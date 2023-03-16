import { Router } from "express";
import { CreateFarmer, LoginFarmer } from "../controllers/FarmersControllers";
import { LoginUser, RegisterUser } from "../controllers/UserController";

const router = Router();

router.post("/loginUser", LoginUser);
router.post("/regiterUser", RegisterUser);
router.post("/registerFarmer", CreateFarmer);
router.post("/loginFarmer", LoginFarmer);

export default router;
