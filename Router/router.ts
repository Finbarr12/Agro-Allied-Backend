import { Router } from "express";
import { LoginUser, RegisterUser } from "../controllers/UserController";

const router = Router();

router.post("/loginUser", LoginUser);
router.post("/regiterUser", RegisterUser);

export default router;
