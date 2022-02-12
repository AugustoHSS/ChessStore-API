import express from 'express';
import authRouter from './authRouter.js';
import cupomRouter from './cupomRouter.js';
import cartRouter from './cartRouter.js'
import { homeProducts, sendProduct } from '../controllers/productsController.js';

const router = express.Router();
router.use(authRouter);
router.use(cupomRouter);
router.use(cartRouter)
router.get('/home', homeProducts);
router.get('/home/:productId', sendProduct);

export default router;
