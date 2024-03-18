import { NestFactory } from '@nestjs/core';
import { TransportsModule } from './transports.module';

async function bootstrap() {
  const app = await NestFactory.create(TransportsModule);
  await app.listen(3000);
}
bootstrap();
