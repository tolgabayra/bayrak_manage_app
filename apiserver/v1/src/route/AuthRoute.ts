import express from "express"
import { AuthController } from "../controller/AuthController";

const router = express.Router();
const controller = new AuthController


router.post("/login", controller.LoginUser)




export default router