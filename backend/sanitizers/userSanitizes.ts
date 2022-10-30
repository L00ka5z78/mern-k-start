import { emailRegex } from '../schema/userSchema';
import { UserType } from '../types/userTypes';
import HttpException from '../utils/httpException';

export function sanitizeUser(users: UserType): UserType {
  let sanitizedUser = <UserType>{};

  sanitizedUser.email = sanitizeEmail(users.email);
  sanitizedUser.isAdmin = sanitizeIsAdmin(users.isAdmin);
  sanitizedUser.username = sanitizeUsername(users.username);
  sanitizedUser.password = users.password;

  return sanitizedUser;
}

function sanitizeUsername(username: string): string {
  //types
  if (username === undefined) {
    throw new HttpException('Username is undefined', 400);
  }
  if (typeof username !== 'string') {
    throw new HttpException('Username is not string', 400);
  }

  //atributes
  username = username.trim();
  return username;
}

function sanitizeIsAdmin(isAdmin: boolean): boolean {
  //types
  if (!isAdmin) isAdmin = false;
  return isAdmin;
}

function sanitizeEmail(email: string): string {
  //types
  if (email === undefined) {
    throw new HttpException('Email is undefined', 400);
  }
  if (typeof email !== 'string') {
    throw new HttpException('Email is not string', 400);
  }
  //atributes
  email = email.trim();
  if (email.length < 6) {
    throw new HttpException('Email must be at least 6 characters', 400);
  }
  if (email.length > 50) {
    throw new HttpException('Email must be less than 50 characters', 400);
  }
  if (!email.match(emailRegex)) {
    throw new HttpException('Please add a valid email', 400);
  }
  return email;
}