import { Router } from "express";
import extracategoryController from "../controller/extracategory.controller.js";
import imageUploads from "../middleware/imageUpload.js";

const extracategoryRouter = Router()

extracategoryRouter.get('/add-extracategory', extracategoryController.addextraCategoryPage)
extracategoryRouter.post('/add-extracategory', imageUploads, extracategoryController.addextraCategory)
extracategoryRouter.get('/viewextraCategory', extracategoryController.viewCategories)
// Edit page open
extracategoryRouter.get('/editextraCategory/:id', extracategoryController.editextraCategoryPage);

// Update extracategory
extracategoryRouter.post('/updateextraCategory/:id',imageUploads, extracategoryController.updateextraCategory);

export default extracategoryRouter