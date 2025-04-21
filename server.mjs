//Imports
import express from 'express';
const router = express.Router();
import users from "./data/users.mjs";
import posts from "./data/posts.mjs";


//Setups
const app = express();
const port = 3000;

//Middleware

//Routes
app.get("/", (req, res) => {
  res.send("User Routes");
});
app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/posts", (req, res) => {
  res.json(posts);
});

//Listener
app.listen(port, () => {
  console.log(`server running on port: ${port}`);
  console.log("Users: ", users);
  console.log("Posts: ", posts);
});