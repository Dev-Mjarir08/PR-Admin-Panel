



import productModel from "../../model/product.model.js"
import fs from "fs";

export const creatProduct = async (req, res) => {
    try {

        const product = await productModel.create(req.body)
        return res.json(product);
    } catch (error) {
        return res.json({ error: error.message });
    }
}

export const getAllProduct = async (req,res)=>{
    try {
        const products = await productModel.find({}).populate('category').populate('subcategory').populate('extracategory')
        return res.json(products);
    } catch (error) {
        return res.json({ error: error.message });
    }
}
export const getSingleProduct = async (req, res) => {
    try {
        const product = await productModel.findById(req.params.id)
            .populate("category")
            .populate("subcategory")
            .populate("extracategory");

        return res.json({
            success: true,
            product
        });

    } catch (error) {
        return res.json({ error: error.message });
    }
};

export const deleteProduct = async (req,res)=>{
    try {
        const {id} = req.params;
        const dltProduct = await productModel.findByIdAndDelete(id);
        return res.json(dltProduct);
    } catch (error) { 
        return res.json({ error: error.message });
    }
}

export const updateProduct = async (req,res) =>{
    try {
        const {id} = req.params;



        const update = await productModel.findByIdAndUpdate(id,req.body);

        return res.json({message : "success"} , update);
    } catch (error) {
        return res.json({error : error.message})
    }
}