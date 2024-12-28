const express = require("express");
const app = express();
const port = 3010;

// Route to handle GET requests to "/"
app.get("/", (req, res) => {
  // Get client IP address
  const clientIp =
    req.headers["x-forwarded-for"] || req.socket.remoteAddress || "Unknown";

  // HTML content with welcome message and client IP
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                text-align: center;
                margin: 0;
                padding: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                background-color: #eaf2f8;
            }
            .container {
                padding: 30px;
                border: 2px solid #ccc;
                background: #fff;
                border-radius: 10px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            }
            h1 {
                color: #2c3e50;
            }
            h2 {
                color: #16a085;
                margin: 15px 0;
            }
            p {
                color: #555;
                font-size: 18px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>Welcome to the Node.js App!</h1>
            <h2>Your IP Address is:</h2>
            <p>${clientIp}</p>
        </div>
    </body>
    </html>
  `;

  // Send the HTML response
  res.send(htmlContent);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
