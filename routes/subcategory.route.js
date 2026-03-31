import { Router } from "express";
import subcategoryController from "../controller/subcategory.controller.js";
import imageUploads from "../middleware/imageUpload.js";

const subcategoryRouter = Router()

subcategoryRouter.get('/add-subcategory', subcategoryController.addsubCategoryPage)
subcategoryRouter.post('/add-subcategory', imageUploads, subcategoryController.addsubCategory)
subcategoryRouter.get('/viewsubCategory', subcategoryController.viewCategories)
// Edit page open
subcategoryRouter.get('/editsubCategory/:id', subcategoryController.editsubCategoryPage);

// Update subcategory
subcategoryRouter.post('/updatesubCategory/:id',imageUploads, subcategoryController.updatesubCategory);

export default subcategoryRouter