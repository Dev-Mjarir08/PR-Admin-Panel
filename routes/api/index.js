import { Router } from "express";
import userRouter from "./user.route.js";
import productRouter from "./product.route.js";
import catRouter from "./catagory.route.js";
import catSubRouter from "./subcategory.route.js";
import extracatRouter from "./extraCatagory.route.js";

const apiRouter = Router();

apiRouter.use('/user',userRouter)
apiRouter.use('/product', productRouter)
apiRouter.use('/category', catRouter)
apiRouter.use('/subcategory', catSubRouter)
apiRouter.use('/extracategory', extracatRouter)


export default apiRouter;