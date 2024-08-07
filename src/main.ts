import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //  setGlobalPrefix() is used to set a global prefix for all routes
  //  setGlobalPrefix() se utiliza para establecer un prefijo global para todas las rutas
  app.setGlobalPrefix('api/v2');
  app.useGlobalPipes(
    // Instalar npm install class-validator class-transformer
    // para que funcione el pipe de validacion
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Pokemon API')
    .setDescription('The Pokemon API description')
    .setVersion('1.0')
    .addTag('pokemon')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api/v2/docs', app, document);

  await app.listen(process.env.PORT);
}
bootstrap();
