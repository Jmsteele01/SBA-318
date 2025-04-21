import express from "express";
import users from "../data/users.mjs";
import posts from "../data/posts.mjs";

const router = express.Router();

router.get('/', (req, res) =>{
    res.send("Post Routes")
})

export default router;