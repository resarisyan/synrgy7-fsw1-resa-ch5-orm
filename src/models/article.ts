import { Model, ModelObject } from 'objection';

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
}

export type Articles = ModelObject<Article>;
