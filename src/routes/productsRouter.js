import { Router } from 'express'
import { homeProducts, sendProduct } from '../controllers/productsController.js'

const productsRouter = Router()

productsRouter.get('/home', homeProducts)
productsRouter.get('/home/:productId', sendProduct)

export default productsRouter
