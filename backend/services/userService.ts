import { checkIsValidObjectId } from '../database/db';
import UserModel from '../models/userModel';
import { UserType } from '../types/userTypes';
import { IUserSchema } from '../schema/userSchema';
import { sanitizeUser } from '../sanitizers/userSanitizes';

export async function getUsers(): Promise<UserType[]> {
  try {
    const users = await UserModel.find();
    if (!users) throw new Error('Users not found');
    return users;
  } catch (err) {
    throw new Error(`Failed to get users: ${err.message}`);
  }
}

export async function createUser(user: UserType): Promise<UserType> {
  const sanitizedUser = sanitizeUser(user);
  try {
    const newUser = await UserModel.create(user);
    if (!newUser) throw new Error('User not created');
    return newUser;
  } catch (err) {
    throw new Error(`Failed to create user: ${err.message}`);
  }
}

export async function getUserById(userId: string): Promise<IUserSchema> {
  checkIsValidObjectId(userId);

  try {
    const user = await UserModel.findById(userId);
    if (!user) throw new Error('User not found');
    return user;
  } catch (err) {
    throw new Error(`Failed to get user: ${err.message}`);
  }
}

export async function updateUser(
  userId: string,
  user: UserType
): Promise<IUserSchema> {
  checkIsValidObjectId(userId);
  const sanitizedUser = sanitizeUser(user);

  try {
    const updatedUser = await UserModel.findByIdAndUpdate(userId, user, {
      new: true,
    });
    if (!updatedUser) throw new Error('User not found');
    return updatedUser;
  } catch (err) {
    throw new Error(`Failed to update user: ${err.message}`);
  }
}

export async function deleteUser(userId: string): Promise<void> {
  checkIsValidObjectId(userId);

  try {
    const user = await UserModel.findByIdAndDelete(userId);
    if (!user) throw new Error('User not found');
    return;
  } catch (err) {
    throw new Error(`Failed to delete user: ${err.message}`);
  }
}
