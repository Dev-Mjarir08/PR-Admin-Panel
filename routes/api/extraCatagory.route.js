import { Router } from "express";


import { extracreateCategory, extradeleteCategory, extragetAllCategory, extraupdateCategory,extragetSingleCategory } from "../../controller/APIcontroller/extracategory.controller.js";


const extracatRouter = Router();

//create product
extracatRouter.post('/', extracreateCategory)

extracatRouter.get('/:id', extragetSingleCategory);

//get all product 
extracatRouter.get('/', extragetAllCategory);

//delete product 
extracatRouter.delete('/:id', extradeleteCategory);

// update product
extracatRouter.patch('/:id', extraupdateCategory)

export default extracatRouter;