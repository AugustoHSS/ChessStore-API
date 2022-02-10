import express from 'express';
import { signUp } from '../controllers/authController.js';
import validateSignUpSchema from '../middlewares/validateSignUpSchemaMiddleware.js';

const authRouter = express.Router();

authRouter.post('/sign-up', validateSignUpSchema, signUp);

export default authRouter;
