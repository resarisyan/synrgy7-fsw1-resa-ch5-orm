import { Model, ModelObject } from 'objection';
import { Comment } from './comment';

export class Article extends Model {
  id!: number;
  title!: string;
  body!: string;
  author!: string;
  image?: string;
  is_approved?: boolean;
  created_at!: Date;
  updated_at!: Date;

  static tableName = 'articles';

  static get relationMappings() {
    return {
      comments: {
        relation: Model.HasManyRelation,
        modelClass: Comment,
        join: {
          from: 'articles.id',
          to: 'comments.article_id',
        },
      },
    };
  }
}

export type Articles = ModelObject<Article>;
