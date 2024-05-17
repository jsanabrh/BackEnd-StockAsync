import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function aplication() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 5000;

  app.setGlobalPrefix('/v1/api');

  const config = new DocumentBuilder()
    .setTitle('StockAsync')
    .setDescription('Login and Register')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('v1/api/docs', app, document);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}/v1/api`);
  console.log(`Swagger documentation: http://localhost:${port}/v1/api/docs`);
}
aplication();
