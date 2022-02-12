import express from 'express'
import authRouter from './authRouter.js'
import cupomRouter from './cupomRouter.js'
import productsRouter from './productsRouter.js'
import cartRouter from './cartRouter.js'

const router = express.Router()
router.use(productsRouter)
router.use(authRouter)
router.use(cupomRouter)
router.use(cartRouter)

export default router
