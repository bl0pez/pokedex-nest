import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
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
    }),
  )

  await app.listen(3000);
}
bootstrap();