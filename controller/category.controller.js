import fs from 'fs'

const categoryController = {
    addCategoryPage(req, res) {
        return res.render('./pages/create-category')
    },
    async addCategory(req, res) {
        try {
            if (req.file) {
                req.body.image = req.file.path;
            }

            const response = await fetch('http://localhost:8081/api/category/', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(req.body),
            });

            const data = await response.json();
            console.log(data);


            return res.redirect('/category/viewCategory'); // ✅✅ FIX

        } catch (error) {
            console.log(error.message);
            return res.redirect('/create-category'); // ✅ better route
        }
    },
    viewCategories: async (req, res) => {

        try {
            const response = await fetch("http://localhost:8081/api/category/", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();

            return res.render("./pages/viewCategory.ejs", {
                categories: data || []
            });
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Internal server error",
                error: error.message,
            });

        }
    },
    editCategoryPage: async (req, res) => {
        try {
            const response = await fetch(
                `http://localhost:8081/api/category/${req.params.id}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                },
            );
            const data = await response.json();

            return res.render("./pages/editCategory", {
                category: data
            });

        } catch (error) {
            console.log(error);
            return res.send("Error loading edit page");
        }
    },
    updateCategory: async (req, res) => {
        try {

            let image = req.body.image;
            if (req.file) {
                req.body.image = req.file.path;
            }

            await fetch(`http://localhost:8081/api/category/${req.params.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(req.body)
            });
            if (req.file && image) {
                fs.unlinkSync(image);
            }
            return res.redirect("/category/viewCategory");

        } catch (error) {
            console.log(error);
            return res.send("Error updating category");
        }
    }
}
export default categoryController