import { Note } from '../models/note.entity';
import { config } from 'dotenv';
import { DataSourceOptions } from 'typeorm';

config();

const {
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DATABASE,
  POSTGRES_SCHEMA,
  LOG_LEVEL,
} = process.env;

export const typeOrmCommonConfig: DataSourceOptions = {
  synchronize: false,
  type: 'postgres',
  host: POSTGRES_HOST || '127.0.0.1',
  port: Number(POSTGRES_PORT || 3020),
  username: POSTGRES_USER || 'learning',
  password: POSTGRES_PASSWORD || 'learning',
  database: POSTGRES_DATABASE || 'learning',
  schema: POSTGRES_SCHEMA || 'my_notes',
  logging: LOG_LEVEL === 'debug',
  entities: ['./**/*.entity.{js,ts}'],
};

const entities = [Note];

export const typeOrmConfig: DataSourceOptions = {
  ...typeOrmCommonConfig,
  entities: [...entities, __dirname + '/**/*.entity.{js,ts}'],
};
