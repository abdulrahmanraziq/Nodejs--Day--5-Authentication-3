import express from 'express';
import userRouter from './user.js';
const router = express.Router();

router.get('/', (req, res) =>{
    res.send(`<h1>Welcome to the Password Reset App</h1>`)
})

router.use('/user', userRouter)
export default router;