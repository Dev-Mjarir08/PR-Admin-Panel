const subcategoryController = {
    addsubCategoryPage(req, res) {
        return res.render('./pages/create-subcategory')
    },
    async addsubCategory(req, res) {
        try {
            if (req.file) {
                req.body.image = req.file.path;
            }

            const response = await fetch('http://localhost:8081/api/subcategory/', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(req.body),
            });

            const data = await response.json();
            console.log('created');

            console.log(data);


            return res.redirect('/subcategory/viewsubCategory'); // ✅✅ FIX

        } catch (error) {
            console.log(error.message);
            return res.redirect('/create-subcategory'); // ✅ better route
        }
    },
    viewCategories: async (req, res) => {
        if (req.file) {
            req.body.image = req.file.path;
        }
        try {
            const response = await fetch("http://localhost:8081/api/subcategory/", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();
            console.log(data); //
            return res.render("./pages/viewsubCategory.ejs", {
                categories: data || []
            });
        } catch (error) {
            return res.json({
                success: false,

            });

        }
    },
    editsubCategoryPage: async (req, res) => {

        try {
            const response = await fetch(
                `http://localhost:8081/api/subcategory/${req.params.id}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                },
            );
            const data = await response.json();

            return res.render("./pages/editsubCategory", {
                subcategory: data
            });

        } catch (error) {
            console.log(error);
            return res.send("Error loading edit page");
        }
    },
      updatesubCategory: async (req, res) => {
            try {
    
                let image = req.body.image;
                if (req.file) {
                    req.body.image = req.file.path;
                }
    
                await fetch(`http://localhost:8081/api/subcategory/${req.params.id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(req.body)
                });
                if (req.file && image) {
                    fs.unlinkSync(image);
                }
                return res.redirect("/subcategory/viewsubCategory");
    
            } catch (error) {
                console.log(error);
                return res.send("Error updating category");
            }
        }
}
export default subcategoryController