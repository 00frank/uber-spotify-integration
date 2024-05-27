import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { AllExceptionFilter } from '@app/common';

import { AuthModule } from './auth.module';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule, { cors: true });
  app.use(cookieParser());
  app.useGlobalFilters(new AllExceptionFilter());
  app.setGlobalPrefix('/api/v1');

  await app.listen(process.env.PORT || 3000);
  console.log("> Listening on port", Number(process.env.PORT || 3000));
}
bootstrap();
