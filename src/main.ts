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
    .setDescription(
      'The registration and login system has been implemented to provide a secure and efficient method of user authentication. When logging in, the system generates and returns a JSON Web Token (JWT). This token is used to authenticate and authorize access to the resources of the ApiRest developed in Java. By using the JWT, it ensures that subsequent interactions with the ApiRest are secure and that only authenticated users can access the protected services.',
    )
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
