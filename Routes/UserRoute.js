import express from 'express';
import { register, login } from '../Controllers/UserController.js';
import { validateRegistration, validateLogin } from '../Middlewares/AuthMiddleware.js';

const router = express.Router();

router.post('/register', validateRegistration, register);
router.post('/login', validateLogin, login);

export default router;