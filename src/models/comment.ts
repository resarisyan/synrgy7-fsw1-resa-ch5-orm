import { Model, ModelObject } from 'objection';
import { Article } from './article';

export class Comment extends Model {
  id!: number;
  article_id!: number;
  comment!: string;
  created_at!: Date;
  updated_at!: Date;

  static tableName = 'comments';

  static get relationMappings() {
    return {
      article: {
        relation: Model.BelongsToOneRelation,
        modelClass: Article,
        join: {
          from: 'comments.article_id',
          to: 'articles.id',
        },
      },
    };
  }
}

export type Comments = ModelObject<Comment>;
