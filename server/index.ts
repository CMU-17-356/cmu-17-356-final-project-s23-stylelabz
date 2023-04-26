import express, { Express, Request, Response } from 'express';
import mongoose from "mongoose";

import routes from './routes';

mongoose
  .connect("mongodb+srv://dzellmer:40EwV0UgYH8DAp2O@cluster0.u1ayvwq.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    const app: Express = express();
    const port = process.env.PORT || 8000;

    app.use('/api', routes);

    app.listen(port, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    });
  })