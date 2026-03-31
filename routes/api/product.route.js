import { Router } from "express";
import { creatProduct, deleteProduct, getAllProduct, updateProduct ,getSingleProduct } from "../../controller/APIcontroller/product.controller.js";

import imageUploads from "../../middleware/imageUpload.js";

const productRouter = Router();

//create product
productRouter.post('/', imageUploads , creatProduct)

//get all product 
productRouter.get('/', getAllProduct);

//delete product 
productRouter.delete('/:id', deleteProduct);

productRouter.get('/:id', getSingleProduct);

// update product
productRouter.patch('/:id',imageUploads, updateProduct)

export default productRouter;