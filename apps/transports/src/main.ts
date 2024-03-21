import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AllExceptionFilter } from '@app/common';

import { TransportsModule } from './transports.module';

async function bootstrap() {
  const app = await NestFactory.create(TransportsModule, { cors: true });
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new AllExceptionFilter());
  app.setGlobalPrefix('/api/v1');

  await app.listen(process.env.PORT || 3000);
  console.log("> Listening on port", Number(process.env.PORT || 3000));
}
bootstrap();
