import { Request, Response, NextFunction } from 'express';
import { Article } from '../models/article';

export class ArticleController {
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      //   const article = await Article.query();
      // get with relationMappings
      const article = await Article.query().withGraphFetched('comments');
      if (!article) {
        throw new Error('Articles not found');
      }
      return res.json({
        message: 'Success',
        data: article,
      });
    } catch (error: any) {
      return res.status(404).json({ message: error.message });
    }
  }

  static async getOne(req: Request, res: Response, next: NextFunction) {
    try {
      const article = await Article.query().findById(req.params.id);
      if (!article) {
        throw new Error('Article not found');
      }
      return res.json({
        message: 'Success',
        data: article,
      });
    } catch (error: any) {
      return res.status(404).json({ message: error.message });
    }
  }

  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const article = await Article.query().insert(req.body);
      return res.json({
        message: 'Success',
        data: article,
      });
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }

  static async update(req: Request, res: Response, next: NextFunction) {
    try {
      const article = await Article.query().patchAndFetchById(
        req.params.id,
        req.body
      );
      if (!article) {
        throw new Error('Article not found');
      }
      return res.json({
        message: 'Success',
        data: article,
      });
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }

  static async delete(req: Request, res: Response, next: NextFunction) {
    try {
      const article = await Article.query().deleteById(req.params.id);
      if (!article) {
        throw new Error('Article not found');
      }
      return res.json({
        message: 'Success',
        data: article,
      });
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }
}
