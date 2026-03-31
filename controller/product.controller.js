import fs from 'fs'

const productController = {
    addproductPage: async (req, res) => {
        const categories = await fetch("http://localhost:8081/api/category/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const subcategories = await fetch(
            "http://localhost:8081/api/subcategory",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            },
        );
        const extraCategories = await fetch(
            "http://localhost:8081/api/extracategory",
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            },
        );
        const categoriesData = await categories.json();
        const subcategoriesData = await subcategories.json();
        const extraCategoriesData = await extraCategories.json();

        return res.render("./pages/create-product.ejs", {
            categories: categoriesData,
            subcategories: subcategoriesData,
            extraCategories: extraCategoriesData
        });
    },
    async addProduct(req, res) {
        try {
            if (req.file) {
                req.body.image = req.file.path;
            }

            const response = await fetch('http://localhost:8081/api/product/', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(req.body),
            });

            const data = await response.json();
            console.log(data);


            return res.redirect('/product/viewProduct'); // ✅✅ FIX

        } catch (error) {
            console.log(error.message);
            return res.redirect('/create-product'); // ✅ better route
        }
    },

    viewProducts: async (req, res) => {

        const response = await fetch("http://localhost:8081/api/product/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        const data = await response.json();

        return res.render("./pages/viewProduct.ejs", {
            products: data,
        });
    },
    editproductPage: async (req, res) => {
        try {

            const { id } = req.params;
            const productResponse = await fetch(`http://localhost:8081/api/product/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const data = await productResponse.json();

            const categories = await fetch("http://localhost:8081/api/category/", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const subcategories = await fetch(
                "http://localhost:8081/api/subcategory",
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                },
            );
            const extraCategories = await fetch(
                "http://localhost:8081/api/extracategory",
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                },
            );
            const categoriesData = await categories.json();
            const subcategoriesData = await subcategories.json();
            const extraCategoriesData = await extraCategories.json();

            return res.render("./pages/editproduct.ejs", {
                product: data.product,
                categories: categoriesData,
                subcategories: subcategoriesData,
                extraCategories: extraCategoriesData
            });
        } catch (error) {
            console.log(error);
            return res.send("Error fetching product");
        }
    },
    updateproduct: async (req, res) => {
        try {
            const { id } = req.params;

            let image = req.body.image;
            if (req.file) {
                req.body.image = req.file.path;
            }
            await fetch(`http://localhost:8081/api/product/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(req.body),
            });
           if (req.file && image) {
                    fs.unlinkSync(image);
                }
            req.body.image = image;
            return res.redirect('/product/viewProduct');
        } catch (error) {
            console.log(error);
            return res.send("Error updating product");
        }
    },
    deleteproduct: async (req, res) => {
        try {
            const { id } = req.params;
            await fetch(`http://localhost:8081/api/product/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            return res.redirect('/product/viewProduct');
        }
        catch (error) {
            console.log(error);
            return res.send("Error deleting product");
        }
    }
}
export default productController