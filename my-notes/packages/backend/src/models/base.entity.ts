import { Column, UpdateDateColumn, CreateDateColumn } from 'typeorm';

export abstract class BaseEntity {
  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdDateTime?: Date;

  @Column({ type: 'json', nullable: true })
  createdBy?: string;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  lastChangedDateTime?: Date;

  @Column({ type: 'json', nullable: true })
  lastChangedBy?: string;
}
