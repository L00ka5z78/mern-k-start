import { Request, Response } from 'express';
const asyncHandler = require('express-async-handler');
import {
  createUser,
  getUsers,
  getUserById,
  deleteUser,
  updateUser,
} from '../services/userService';

//@desc Get all Users
//@route GET /api/users
//@access Public

const getUsersHandler = asyncHandler(async (req: Request, res: Response) => {
  const users = await getUsers();
  res.status(200).json(users);
});

//@desc Create a new User
//@route POST /api/user
//@access Private

const createUserHandler = asyncHandler(async (req: Request, res: Response) => {
  const createdUser = await createUser(req.body);
  res.status(201).json(createdUser);
});

//@desc Get a User by id
//@route GET /api/user/:id
//@access Public

const getUserHandler = asyncHandler(async (req: Request, res: Response) => {
  const user = await getUserById(req.params.id);
  res.status(200).json(user);
});

//@desc Delete a User by id
//@route DELETE /api/user/:id
//@access Private

const deleteUserHandler = asyncHandler(async (req: Request, res: Response) => {
  await deleteUser(req.params.id);
  res.status(200).json({
    message: `User ${req.params.id} deleted`,
  });
});

//@desc Update a User by id
//@route PUT /api/user/:id
//@access Private

const updateUserHandler = asyncHandler(async (req: Request, res: Response) => {
  const user = await updateUser(req.params.id, req.body);
  res.json(user);
});

module.exports = {
  getUsersHandler,
  createUserHandler,
  getUserHandler,
  deleteUserHandler,
  updateUserHandler,
};