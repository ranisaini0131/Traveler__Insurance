import express from 'express'
import UserController from '../controllers/user.js'
import middlewares from '../middlewares/required.js';
import upload from '../middlewares/upload.js';
import User from '../models/userSchema.js';

const router = express.Router()

const { auth } = middlewares

// router.use('/uploadsDocuments', upload.fields([{ name: "claims", maxCount: 4 }]))

router.post('/verify', auth, UserController.verify);
router.post('/uploadsDocuments', auth, UserController.uploadsDocuments)

export default router