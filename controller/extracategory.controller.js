const extracategoryController = {
    addextraCategoryPage(req, res) {
        return res.render('./pages/create-extracategory')
    },
    async addextraCategory(req, res) {
        try {
            if (req.file) {
                req.body.image = req.file.path;
            }

            const response = await fetch('http://localhost:8081/api/extracategory/', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(req.body),
            });

            const data = await response.json();
            console.log('created');

            console.log(data);


            return res.redirect('/extracategory/viewextraCategory'); // ✅✅ FIX

        } catch (error) {
            console.log(error.message);
            return res.redirect('/create-extracategory'); // ✅ better route
        }
    },
    viewCategories: async (req, res) => {
        if (req.file) {
            req.body.image = req.file.path;
        }
        try {
            const response = await fetch("http://localhost:8081/api/extracategory/", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();
            console.log(data); //
            return res.render("./pages/viewextraCategory.ejs", {
                categories: data || []
            });
        } catch (error) {
            return res.json({
                success: false,

            });

        }
    },
    editextraCategoryPage: async (req, res) => {

        try {
            const response = await fetch(
                `http://localhost:8081/api/extracategory/${req.params.id}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                },
            );
            const data = await response.json();

            return res.render("./pages/editextraCategory", {
                extracategory: data
            });

        } catch (error) {
            console.log(error);
            return res.send("Error loading edit page");
        }
    },
    updateextraCategory: async (req, res) => {
          try {
  
              let image = req.body.image;
              if (req.file) {
                  req.body.image = req.file.path;
              }
  
              await fetch(`http://localhost:8081/api/extracategory/${req.params.id}`, {
                  method: "PATCH",
                  headers: {
                      "Content-Type": "application/json"
                  },
                  body: JSON.stringify(req.body)
              });
              if (req.file && image) {
                  fs.unlinkSync(image);
              }
              return res.redirect("/extracategory/viewextraCategory");
  
          } catch (error) {
              console.log(error);
              return res.send("Error updating category");
          }
      }
}
export default extracategoryController