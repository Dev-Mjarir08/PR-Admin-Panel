import extraCategoryModel from "../../model/extraCatagory.model.js"
import fs from "fs";

export const extracreateCategory = async (req, res) => {
    try {
        const product = await extraCategoryModel.create(req.body);
        return res.json(product);
    } catch (error) {
        return res.json({ error: error.message });
    }
}

export const extragetAllCategory = async (req,res)=>{
    try {
        const products = await extraCategoryModel.find({});
        return res.json(products);
    } catch (error) {
        return res.json({ error: error.message });
    }
}

export const extradeleteCategory = async (req,res)=>{
    try {
        const {id} = req.params;
        const dltProduct = await extraCategoryModel.findByIdAndDelete(id);
        return res.json(dltProduct);
    } catch (error) {
        return res.json({ error: error.message });
    }
}

export const extraupdateCategory = async (req,res) =>{
    try {
        const {id} = req.params;

        if(req.file){
            req.body.image = req.file.path;
        }

        const update = await extraCategoryModel.findByIdAndUpdate(id,req.body);
        fs.unlinkSync(update.image);

        return res.json({message : "success"});
    } catch (error) {
        return res.json({error : error.message})
    }
}
export const extragetSingleCategory = async (req, res) => {
    try {
        const category = await extraCategoryModel.findById(req.params.id);
        return res.json(category);
    } catch (error) {
        console.log(error);
        return res.json({ error: error.message })
    }
}