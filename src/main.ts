import { NestFactory } from '@nestjs/core';
import { UsuariosModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(UsuariosModule);
  await app.listen(3000);
}
bootstrap();
