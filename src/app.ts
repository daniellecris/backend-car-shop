import express from 'express';
import 'express-async-errors';
import carRouter from './routers/CarRouter';
import errorHandler from './middlewares/errors';

const app = express();

app.use(express.json());
app.use(carRouter);
app.use(errorHandler);

export default app;