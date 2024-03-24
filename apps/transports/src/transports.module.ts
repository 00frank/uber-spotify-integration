import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { TransportsController } from './transports.controller';
import { TransportsService } from './transports.service';
import { CarsModule } from './cars/cars.module';
import { SocketProvider } from './providers/websocket.provider';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['apps/transports/.env', '.env'],
    }),
    MongooseModule.forRoot(process.env.MONGO_URI, {
      dbName: process.env.MONGO_DB_NAME,
      user: process.env.MONGO_USER,
      pass: process.env.MONGO_PASSWORD
    }),
    CarsModule
  ],
  controllers: [TransportsController],
  providers: [TransportsService, SocketProvider],
})
export class TransportsModule { }
