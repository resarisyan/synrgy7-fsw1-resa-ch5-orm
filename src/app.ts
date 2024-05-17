import express, { Express } from 'express';
import dotenv from 'dotenv';
import { apiRouter } from './routes';
import knex from 'knex';
import { Model } from 'objection';
import knexConfig from './config/database';

Model.knex(knex(knexConfig));
dotenv.config();
const app: Express = express();
const port = process.env.PORT || 6000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiRouter);
app
  .listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  })
  .on('error', (err) => {
    console.error(err);
  });
