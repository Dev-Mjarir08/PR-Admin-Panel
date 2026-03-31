import { Router } from "express";
import apiRouter from "./api/index.js";
import userRouter from "./user.route.js";
import categoryRouter from "./category.route.js";
import subcategoryRouter from "./subcategory.route.js";
import extracategoryRouter from "./extracategory.route.js";
import productRouter from "./product.route.js";

const router = Router();

router.use('/api',apiRouter);
router.use('/' ,userRouter)
router.use('/product' ,productRouter)
router.use('/category' ,categoryRouter)
router.use('/subcategory' ,subcategoryRouter)
router.use('/extracategory' ,extracategoryRouter)

export default router;