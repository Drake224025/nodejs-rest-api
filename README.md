# Node.js CRUD Application

This is a simple Node.js CRUD application that demonstrates basic Create, Read, Update, and Delete operations using a MongoDB database.

## Dependencies

- Node.js
- Express.js
- MongoDB
- Mongoose

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/nodejs-rest-api.git
   ```

2. Install dependencies:

   ```bash
   cd nodejs-rest-api
   npm install
   ```

3. Set up your MongoDB database and update the connection string in .env.

4. Start the application:

   ```bash
   npm run dev
   ```

## Usage

- Access the application at `http://localhost:3000`.
- Use API endpoints for CRUD operations:

  - `GET /api/product`: Get all items.
  - `GET /api/product/:id`: Get a specific item.
  - `POST /api/product`: Create a new item.
  - `PUT /api/product/:id`: Update an item.
  - `DELETE /api/product/:id`: Delete an item.

## Folder Structure

- `models`: Defines MongoDB models using Mongoose.
- `routes`: Defines API routes.
- `controllers`: Handles business logic.
