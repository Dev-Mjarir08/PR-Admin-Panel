import { Router } from "express";


import { createCategory, deleteCategory, getAllCategory, updateCategory,getSingleCategory } from "../../controller/API controller/category.controller.js";


const catRouter = Router();

//create product
catRouter.post('/', createCategory)

catRouter.get('/:id', getSingleCategory);

//get all product 
catRouter.get('/', getAllCategory);

//delete product 
catRouter.delete('/:id', deleteCategory);

// update product
catRouter.patch('/:id', updateCategory)

export default catRouter;