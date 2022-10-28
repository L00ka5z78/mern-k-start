import * as express from 'express';
import { errorHandler } from './middleware/errorMiddleware';
import { PORT } from './utils/config';

const app = express();
app.use(express.json()); //app ca use json

app.use('/api/projects', require('./routes/projectRoutes'));

app.use(errorHandler);

app.listen(PORT, () =>
  console.log(`Server is ON and running on port: http://localhost:${PORT}`)
);
