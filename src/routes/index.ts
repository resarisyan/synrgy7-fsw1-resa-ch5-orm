import express from 'express';
import { articleRouter } from './article-router';
export const apiRouter = express.Router();

apiRouter.use('/articles', articleRouter);
