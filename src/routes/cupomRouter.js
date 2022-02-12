import express from 'express';
import { getCupom } from '../controllers/cupomController.js';

const cupomRouter = express.Router();

cupomRouter.get('/cupom/:cupomName', getCupom);

export default cupomRouter;
