//Imports
import express from 'express';
const router = express.Router();
import users from "../data/users.mjs";
import posts from "../data/posts.mjs";

//Setups
const app = express();
const port = 3000;

//Middleware
// Importing the data from our fake database files.
const users = require("./data/users");
const posts = require("./data/posts");

//Routes
app.get("/", (req, res) => {
  res.send("User Routes");
});   

//Listener
app.listen(port, () => {
  console.log(`server running on port: ${port}`);
  console.log(users);
});