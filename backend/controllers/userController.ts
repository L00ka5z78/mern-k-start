import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import {
    createUser,
    getUsers,
    getUserById,
    deleteUser,
    updateUser,
    loginUser,
} from '../services/userService';

//@desc Get all Users
//@route GET /api/users
//@access public

export const getUsersHandler = asyncHandler(
    async (req: Request, res: Response) => {
        const users = await getUsers();
        res.status(200).json(users);
    }
);

//@desc Create a new User
//@route POST /api/user
//@access public

export const createUserHandler = asyncHandler(
    async (req: Request, res: Response) => {
        const createdUser = await createUser(req.body);
        res.status(201).json(createdUser);
    }
);

//@desc login a user
//@route post/api/User/login
//access public

export const loginUserHandler = asyncHandler(
    async (req: Request, res: Response) => {
        const user = await loginUser(req.body.email, req.body.password);
        res.status(201).json(user);
    }
);

//@desc Get a User by id
//@route GET /api/user/:id
//@access Public

export const getUserHandler = asyncHandler(
    async (req: Request, res: Response) => {
        const user = await getUserById(req.params.id);
        res.status(200).json(user);
    }
);

//@desc Delete a User by id
//@route DELETE /api/user/:id
//@access Private

export const deleteUserHandler = asyncHandler(
    async (req: Request, res: Response) => {
        await deleteUser(req.params.id);
        res.status(200).json({
            message: `User ${req.params.id} deleted`,
        });
    }
);

//@desc Update a User by id
//@route PUT /api/user/:id
//@access Private

export const updateUserHandler = asyncHandler(
    async (req: Request, res: Response) => {
        const user = await updateUser(req.params.id, req.body);
        res.json(user);
    }
);
