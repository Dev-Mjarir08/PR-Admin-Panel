import { Router } from "express";


import { subcreateCategory, subdeleteCategory, subgetAllCategory, subupdateCategory,subgetSingleCategory } from "../../controller/APIcontroller/subcategory.controller.js";


const catRouter = Router();

//create product
catRouter.post('/', subcreateCategory)

catRouter.get('/:id', subgetSingleCategory);

//get all product 
catRouter.get('/', subgetAllCategory);

//delete product 
catRouter.delete('/:id', subdeleteCategory);

// update product
catRouter.patch('/:id', subupdateCategory)

export default catRouter;