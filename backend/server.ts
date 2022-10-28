import * as express from 'express';
import { connectDB } from './database/db';
import { errorHandler } from './middleware/errorMiddleware';
import { PORT } from './utils/config';
import * as Colors from 'colors.ts';
Colors.colors('', '');

connectDB();

const app = express();
app.use(express.json()); //app ca use json

app.use('/api/projects', require('./routes/projectRoutes'));

app.use(errorHandler);

app.listen(PORT, () =>
  console.log(`Server is ON and running on port: http://localhost:${PORT}`)
);
