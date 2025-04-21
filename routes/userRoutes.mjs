// import express from 'express';
// const router = express.Router();

// router.get('/', requestAnimationFrame, res +>{
//     res.send('User Routes')
// })

// export default router;
import express from "express";
import users from "../data/users.mjs";
import posts from "../data/posts.mjs";

const router = express.Router();

router.get('/', (req, res) =>{
    res.send("User Routes")
})

export default router;