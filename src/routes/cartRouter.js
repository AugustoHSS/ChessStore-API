import express from 'express';
import { insertProduct, getCart, deleteProduct } from '../controllers/cartController.js';
import validateTokenMiddleware from '../middlewares/validateTokenMiddleware.js';
import validateCartProductSchemaMiddleware from '../middlewares/validateCartProductSchemaMiddleware.js';

const cartRouter = express.Router();
cartRouter.use(validateTokenMiddleware);
cartRouter.post('/cart', validateCartProductSchemaMiddleware, insertProduct);
cartRouter.get('/cart', getCart);
cartRouter.delete('/cart/:productId', deleteProduct);

export default cartRouter; 