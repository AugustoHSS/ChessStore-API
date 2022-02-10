import express from 'express'
import { homeProducts, sendProduct } from '../controllers/productsController.js'

const router = express.Router()

router.get('/home', homeProducts)
router.get('/home/:productId', sendProduct)

export default router
