import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));
  app.enableCors({
    origin: '*',
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
    exposedHeaders: 'Access-Control-Allow-Origin',
    allowedHeaders: 'Content-Type, Authorization, Accept',
  });

  const config = new DocumentBuilder()
    .setTitle('My note')
    .setDescription('My note API description')
    .setVersion('1.0')
    .addTag('myNote')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(process.env.API_PORT || 3010);
}
bootstrap();
