import express from 'express';
import * as Colors from 'colors.ts';

import { connectDB } from './database/db';
import { errorHandler } from './middleware/errorMiddleware';
import { PORT } from './utils/config';

import PokemonRoutes from './routes/PokemonRoutes';
import userRoutes from './routes/userRoutes';

Colors.colors('', '');

// console.log(MONGO_URI);
// console.log(PORT);
// console.log(NODE_ENV);

export const db = async (): Promise<void> => {
    await connectDB();
};
void db();

const app = express();
app.use(express.json());
// app ca use json

app.use('/api/Pokemons', PokemonRoutes);
app.use('/api/users', userRoutes);

app.use(errorHandler);

app.listen(PORT, () =>
    console.log(`Server is ON and running on port: http://localhost:${PORT}`)
);
