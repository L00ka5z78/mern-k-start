import * as express from 'express';
import { protect } from '../models/authMiddleware';
const userRoutes = express.Router();

import {
    getUsersHandler,
    createUserHandler,
    getUserHandler,
    deleteUserHandler,
    updateUserHandler,
    loginUserHandler,
} from '../controllers/userController';

userRoutes.route('/').get(protect, getUsersHandler).post(createUserHandler);
userRoutes.route('/login').post(loginUserHandler);
userRoutes
    .route('/:id')
    .get(getUserHandler)
    .put(protect, updateUserHandler)
    .delete(protect, deleteUserHandler);

export default userRoutes;
