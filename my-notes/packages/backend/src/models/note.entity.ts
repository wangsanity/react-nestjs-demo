import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'note' })
export class Note extends BaseEntity {
  @PrimaryGeneratedColumn('increment', { name: 'note_id' })
  noteId?: string;

  @Column({ name: 'title', type: 'varchar', length: 100 })
  title: string;

  @Column({ name: 'detail', type: 'varchar' })
  detail?: string;
}
