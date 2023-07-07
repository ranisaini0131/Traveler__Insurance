import express from 'express'
import DataController from '../controllers/data.js'

const router = express.Router()

router.post('/importData', DataController.importData)

export default router