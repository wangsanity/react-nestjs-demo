import { typeOrmCommonConfig } from './src/config/typeormConfig';
import { DataSource } from 'typeorm';

export default new DataSource({
  ...typeOrmCommonConfig,
  migrations: [__dirname + '/db/migrations/*.ts'],
});
