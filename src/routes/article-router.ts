import express from 'express';
import { ArticleController } from '../controllers/article-controller';
export const articleRouter = express.Router();

articleRouter.get('/', ArticleController.getAll);
articleRouter.get('/:id', ArticleController.getOne);
articleRouter.post('/', ArticleController.create);
articleRouter.put('/:id', ArticleController.update);
articleRouter.delete('/:id', ArticleController.delete);
