import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator } from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

router.post('/registerUser', newUserValidator, userController.registerUser);

router.post('/login', userController.loginUser);

export default router;
