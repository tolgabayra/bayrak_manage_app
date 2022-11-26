import express from "express"
import { AuthController } from "../controller/AuthController";

const router = express.Router();
const controller = new AuthController


router.post("/login", controller.LoginUser)
router.post("/register", controller.RegisterUser)
router.post("/logout", controller.Logout)




export default router