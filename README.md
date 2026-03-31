<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PR Admin Panel</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background: #f4f6f9;
            color: #333;
        }
        header {
            background: #0d6efd;
            color: white;
            padding: 30px;
            text-align: center;
        }
        section {
            padding: 20px 40px;
        }
        h1, h2 {
            color: #0d6efd;
        }
        .card {
            background: white;
            padding: 20px;
            margin: 15px 0;
            border-radius: 10px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        ul {
            line-height: 1.8;
        }
        code {
            background: #eee;
            padding: 4px 6px;
            border-radius: 5px;
        }
        footer {
            text-align: center;
            padding: 20px;
            background: #0d6efd;
            color: white;
        }
        a {
            color: #0d6efd;
            text-decoration: none;
        }
    </style>
</head>
<body>

<header>
    <h1>🚀 PR Admin Panel</h1>
    <p>A Full Stack Admin Dashboard for Product & Category Management</p>
</header>

<section>
    <div class="card">
        <h2>📌 Project Overview</h2>
        <p>
            PR Admin Panel is a full-stack web application designed to manage products,
            categories, and subcategories efficiently. It provides an intuitive admin
            interface with CRUD operations and image upload support.
        </p>
    </div>

    <div class="card">
        <h2>✨ Features</h2>
        <ul>
            <li>✅ Product Management (Add, Edit, Delete)</li>
            <li>✅ Category & Subcategory Management</li>
            <li>✅ Image Upload Functionality</li>
            <li>✅ REST API Integration</li>
            <li>✅ EJS Template Rendering</li>
            <li>✅ Responsive Admin Dashboard</li>
        </ul>
    </div>

    <div class="card">
        <h2>🛠️ Tech Stack</h2>
        <ul>
            <li><strong>Frontend:</strong> HTML, CSS, EJS</li>
            <li><strong>Backend:</strong> Node.js, Express.js</li>
            <li><strong>Database:</strong> MongoDB</li>
            <li><strong>Others:</strong> Multer (File Upload), Fetch API</li>
        </ul>
    </div>

    <div class="card">
        <h2>📂 Project Structure</h2>
        <pre>
PR-Admin-Panel/
│── controllers/
│── routes/
│── models/
│── views/
│── public/
│── uploads/
│── app.js
│── package.json
        </pre>
    </div>

    <div class="card">
        <h2>⚙️ Installation & Setup</h2>
        <ol>
            <li>Clone the repository:
                <br><code>git clone https://github.com/Dev-Mjarir08/PR-Admin-Panel.git</code>
            </li>
            <li>Navigate to the project folder:
                <br><code>cd PR-Admin-Panel</code>
            </li>
            <li>Install dependencies:
                <br><code>npm install</code>
            </li>
            <li>Start the server:
                <br><code>npm start</code>
            </li>
        </ol>
    </div>

    <div class="card">
        <h2>🌐 API Endpoints</h2>
        <ul>
            <li><code>GET /api/product</code> - Get all products</li>
            <li><code>POST /api/product</code> - Create product</li>
            <li><code>PATCH /api/product/:id</code> - Update product</li>
            <li><code>DELETE /api/product/:id</code> - Delete product</li>
        </ul>
    </div>

    <div class="card">
        <h2>📸 Screenshots</h2>
        <p>Add your project screenshots here for better presentation.</p>
    </div>

    <div class="card">
        <h2>👨‍💻 Author</h2>
        <p>
            <strong>Jarir Multani</strong><br>
            GitHub: 
            <a href="https://github.com/Dev-Mjarir08" target="_blank">
                github.com/Dev-Mjarir08
            </a>
        </p>
    </div>

    <div class="card">
        <h2>📄 License</h2>
        <p>This project is licensed under the MIT License.</p>
    </div>
</section>

<footer>
    <p>© 2026 PR Admin Panel | Developed with ❤️ by Jarir Multani</p>
</footer>

</body>
</html>
