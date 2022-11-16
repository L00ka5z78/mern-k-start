import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT ?? 5000;
export const NODE_ENV = process.env.NODE_ENV ?? 'development';
export const MONGO_URI = process.env.MONGO_URI ?? null;
// export const MONGO_URI = mongodb+srv://Lukasz:!QAZ2wsx@cluster0.q7jggov.mongodb.net/?retryWrites=true&w=majority

export const JWT_SECRET = process.env.JWT_SECRET ?? '';
