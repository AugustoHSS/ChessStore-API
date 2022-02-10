import express from 'express';
import authRouter from './authRouter.js';
import { homeProducts, sendProduct } from '../controllers/productsController.js';

const router = express.Router();
router.use(authRouter);
router.get('/home', homeProducts);
router.get('/home/:productId', sendProduct);

export default router;
