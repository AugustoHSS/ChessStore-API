import express from 'express'
import authRouter from './authRouter.js'
import cupomRouter from './cupomRouter.js'
import productsRouter from './productsRouter.js'
import cartRouter from './cartRouter.js'
import checkoutRouter from './checkoutRouter.js'

const router = express.Router()
router.use(productsRouter)
router.use(checkoutRouter)
router.use(authRouter)
router.use(cupomRouter)
router.use(cartRouter)

export default router
