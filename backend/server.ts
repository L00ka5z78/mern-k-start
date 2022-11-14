import express from 'express';
import { connectDB } from './database/db';
import { errorHandler } from './middleware/errorMiddleware';
import { PORT } from './utils/config';
import Colors from 'colors.ts';

import projectRoutes from './routes/projectRoutes';
import userRoutes from './routes/userRoutes';

Colors.colors('', '');

export const db = async (): Promise<void> => {
    await connectDB();
};

const app = express();
app.use(express.json());
// app ca use json

app.use('/api/projects', projectRoutes);
app.use('/api/users', userRoutes);

app.use(errorHandler);

app.listen(PORT, () =>
    console.log(`Server is ON and running on port: http://localhost:${PORT}`)
);
