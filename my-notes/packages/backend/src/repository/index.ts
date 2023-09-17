import { Provider, Type } from '@nestjs/common';
import { getDataSourceToken } from '@nestjs/typeorm';
import { Note } from '../models/note.entity';
import { DataSource, DataSourceOptions, Repository } from 'typeorm';
import { BaseEntity } from '../models/base.entity';
import { NoteRepository } from './note.repository';

function provideCustomRepository<
  Entity extends BaseEntity,
  CustomRepository extends Repository<Entity>,
>(
  entity: Type<Entity>,
  repository: Type<CustomRepository>,
  dataSource?: DataSource | DataSourceOptions,
): Provider<CustomRepository> {
  return {
    provide: repository,
    inject: [getDataSourceToken(dataSource)],
    useFactory(dataSource: DataSource): CustomRepository {
      const baseRepository = dataSource.getRepository(entity);
      return new repository(
        baseRepository.target,
        baseRepository.manager,
        baseRepository.queryRunner,
      );
    },
  };
}

export const repositoryServices = [
  provideCustomRepository(Note, NoteRepository),
];
