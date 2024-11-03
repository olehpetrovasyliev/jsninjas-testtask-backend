# Superhero Character Manager - Backend

This is the backend for the Superhero Character Manager application. It provides a RESTful API to manage superhero character data, including CRUD operations for characters.

## Features

- Create, read, update, and delete superhero characters.
- Store character details such as nickname, real name, origin description, superpowers, catchphrase, and image URLs.
- Use of middleware for error handling and data validation.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side development.
- **Express**: A web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing character data.
- **Mongoose**: ODM library for MongoDB and Node.js.
- **Joi**: For validating request data.

## Installation

1. Clone the repository:

   ```bash
     git clone https://github.com/olehhetrovasyliev/jsninjas-testtask-backend.git
   ```

2. Install dependencies

   ```bash
     npm install
   ```

3. Set up .env file

   ```env

     PORT=7777
     DB_HOST=mongodb+srv://username:password@cluster0.qf1dr.mongodb.net/
     CLOUDINARY_CLOUD_NAME=clouidinary_cloud_name
     CLOUDINARY_API_KEY=clouidinary_api_key
     CLOUDINARY_API_SECRET=clouidinary_api_secret
   ```

4. Start the server

   ```bash
     npm start
   ```

## API Endpoints

 ### Characters
   - **GET** /characters: Retrieve all characters.
   - **GET** /characters/:id Retrieve a specific character by ID.
   - **POST** /characters: Create a new character.
   - **PUT** /characters/:id Update an existing character by ID.
   - **DELETE** /characters/:id Delete a character by ID.

## Usage

- Use tools like Postman or Insomnia to interact with the API.
  -Ensure your MongoDB server is running and accessible.

  you can use this instance - https://jsninjas-testtask-backend.onrender.com

## License

Feel free to modify any part of this project!

#### P.S. This backend is delloyed on render.com, so sometimes it can take a few linutes to first load the response
