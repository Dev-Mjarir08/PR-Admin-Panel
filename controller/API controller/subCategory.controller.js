import subCategoryModel from "../../model/subCatagory.model.js"
import fs from "fs";

export const subcreateCategory = async (req, res) => {
    try {
        const product = await subCategoryModel.create(req.body);
        return res.json(product);
    } catch (error) {
        return res.json({ error: error.message });
    }
}

export const subgetAllCategory = async (req,res)=>{
    try {
        const products = await subCategoryModel.find({});
        return res.json(products);
    } catch (error) {
        return res.json({ error: error.message });
    }
}

export const subdeleteCategory = async (req,res)=>{
    try {
        const {id} = req.params;
        const dltProduct = await subCategoryModel.findByIdAndDelete(id);
        return res.json(dltProduct);
    } catch (error) {
        return res.json({ error: error.message });
    }
}

export const subupdateCategory = async (req,res) =>{
    try {
        const {id} = req.params;

        if(req.file){
            req.body.image = req.file.path;
        }

        const update = await subCategoryModel.findByIdAndUpdate(id,req.body);
        fs.unlinkSync(update.image);

        return res.json({message : "success"});
    } catch (error) {
        return res.json({error : error.message})
    }
}
export const subgetSingleCategory = async (req, res) => {
    try {
        const category = await subCategoryModel.findById(req.params.id);
        return res.json(category);
    } catch (error) {
        console.log(error);
        return res.json({ error: error.message })
    }
}