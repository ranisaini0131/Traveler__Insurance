import express from 'express'
import UserController from '../controllers/user.js'
import middlewares from '../middlewares/required.js';

const router = express.Router()

const { auth } = middlewares

router.post('/verify', auth, UserController.verify);

export default router