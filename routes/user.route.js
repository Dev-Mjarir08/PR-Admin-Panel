import { Router } from "express";
import userController from "../controller/adminPanel.controller.js";

const userRouter= Router()

userRouter.get('/',userController.dashboard)
userRouter.get('/login',userController.login)
userRouter.get('/register',userController.register)


export default userRouter