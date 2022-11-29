import express from "express"
import { TaskController } from "../controller/TaskController";
import { VerifyMiddleware  } from "../middleware/VerifyMiddleware";
const router = express.Router();

const controller = new TaskController
const verify = new VerifyMiddleware 


router.get("/:id", controller.getTask)
router.post("/",verify.VerifyAuthToken ,controller.createTask)
router.put("/:id", controller.updateTask)
router.delete("/:id", controller.deleteTask)
router.get("/", controller.getAllTask)



export default router