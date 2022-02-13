import { Router } from 'express'
import { confirmPurchase } from '../controllers/checkoutController.js'
import validateTokenMiddleware from '../middlewares/validateTokenMiddleware.js'

const checkoutRouter = Router()

checkoutRouter.post('/checkout', validateTokenMiddleware, confirmPurchase)

export default checkoutRouter
