import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import mongoose from "mongoose";
import * as dotenv from 'dotenv';

import routes from './routes';

dotenv.config();


const PORT = ((process.env.PORT as unknown) as number) || 8080;
const HOST = process.env.HOST || '0.0.0.0';

const MONGODB_CONNECTION = process.env.MONGODB_CONNECTION;


if (MONGODB_CONNECTION) {
  mongoose
    .connect(`${MONGODB_CONNECTION}`)
    .then(() => {
      const app: Express = express();

      app.use(express.json());
      app.use(cors());

      app.use('/', routes);

      app.use((req: Request, res: Response, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
      });

      app.listen(PORT, HOST, () => {
        console.log(`⚡️[server]: Server is running at http://${HOST}:${PORT}`);
      });
    })
} else {
  console.log("Server connection to MongoDB failed - Missing connection string");
}
