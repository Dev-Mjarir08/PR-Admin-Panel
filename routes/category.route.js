import { Router } from "express";
import categoryController from "../controller/category.controller.js";
import imageUploads from "../middleware/imageUpload.js";

const categoryRouter = Router()

categoryRouter.get('/add-category', categoryController.addCategoryPage)
categoryRouter.post('/add-category', imageUploads, categoryController.addCategory)
categoryRouter.get('/viewCategory', imageUploads, categoryController.viewCategories)
// Edit page open
categoryRouter.get('/editCategory/:id', categoryController.editCategoryPage);

// Update category
categoryRouter.post('/updateCategory/:id',imageUploads, categoryController.updateCategory);

export default categoryRouter