Shoe Store - Advanced Databases (NoSQL)
Student: Dandykulov Daulet (BDA-2401)

This project is a web application for a shoe store using MongoDB as a database, Node.js on the backend, and pure JavaScript on the frontend.

## Project Overview
- Topic:** Shoe Store (E-commerce)
- Database:** MongoDB
- Backend:** Express.js, Mongoose
- Frontend:** HTML, CSS, JavaScript (Fetch API)

The application allows users to browse the product catalog, filter by brand and category, and make a purchase, which automatically updates the inventory in the database.

## System Architecture
- Frontend:** Multi-page application (5 pages: `index.html`, `catalog.html`, `shoes.html`, `magazine.html`). Uses Fetch to communicate with the API.
- Backend:** REST API on Express.js. Routes for products and reports are included.
- Database:** MongoDB (`ShoeStore` database).

 Database Structure & Logic
- Embedded Documents:** Shoe sizes and their stock quantities are stored inside the product document (the `variants` array).
- Advanced Update:** The `$inc` operator and the `$` positional operator are used to reduce the stock of a specific size upon purchase (in the `reduce-stock` endpoint).
- Aggregation:** The `loyalty` report has been implemented, which groups products by category and calculates their quantity via the `$group` pipeline.

Project Structure
shoe-store-mongodb/
├── models/
│   └── Product.js    
├── routes/
│   ├── products.js    
│   └── report.js     
├── public/          
│   ├── index.html   
│   ├── catalog.html
│   ├── shoeses.html
│   └── magazine.html
├── server.js 
