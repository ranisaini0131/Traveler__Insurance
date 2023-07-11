import express from 'express'
import UserController from '../controllers/user.js'
import middlewares from '../middlewares/required.js';
import upload from "../middlewares/uploadDocuments.js"

const router = express.Router()

const { auth, upload } = middlewares

router.post('/verify', auth, upload, UserController.verify);

export default router