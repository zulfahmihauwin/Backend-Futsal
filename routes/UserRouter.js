import express from 'express';
import { getUsers } from '../controllers/UserController.js';

const router = express.Router();

//localhost:5000/users
router.get('/users', getUsers);

export default router;