import express from 'express';
import userController from '../controllers/index.js';
import verify from '../middleware/verify.js';
import verifyAdmin from '../middleware/verifyAdmin.js';
const router = express.Router();
router.get('/getAllUsers', verify, userController.getAllUsers)
router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.post('/forgotPassword', userController.forgotPassword);
router.post('/resetPassword', userController.resetPassword);
export default router;