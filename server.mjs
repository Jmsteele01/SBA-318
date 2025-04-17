import express from 'express';
const router = express.Router();
// import users from "../data/users.mjs";
// import posts from "../data/posts.mjs";

//const express = require("express");
const app = express();
const port = 3000;

// Importing the data from our fake database files.
// const users = require("./data/users");
// const posts = require("./data/posts");

app.get("/", (req, res) => {
  res.send("Work in progress!");
});

app.listen(port, () => {
  console.log(`server running on port: ${port}`);
});