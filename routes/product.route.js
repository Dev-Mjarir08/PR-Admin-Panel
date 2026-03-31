import { Router } from "express";
import productController from "../controller/product.controller.js";
import imageUploads from "../middleware/imageUpload.js";

const productRouter = Router()

productRouter.get('/add-product', productController.addproductPage)
productRouter.post('/add-product', imageUploads,productController.addProduct)
productRouter.get('/viewproduct', imageUploads, productController.viewProducts)
// // Edit page open
productRouter.get('/editproduct/:id', imageUploads, productController.editproductPage);
productRouter.get('/deleteproduct/:id', productController.deleteproduct)

// Update product
productRouter.post('/editproduct/:id',imageUploads, productController.updateproduct);

export default productRouter