import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { controllers, services } from './controllers';
import { repositoryServices } from './repository';
import { typeOrmConfig } from './config/typeormConfig';

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot(typeOrmConfig)],
  controllers: controllers,
  providers: [...services, ...repositoryServices],
})
export class AppModule {}
