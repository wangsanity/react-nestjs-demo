import { BaseEntity } from './base.entity';

export interface Note extends BaseEntity {
  noteId?: string;
  title: string;
  detail?: string;
}
