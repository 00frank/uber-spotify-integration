import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Car, CarSchema } from './model/cars.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Car.name,
        schema: CarSchema
      }
    ])
  ],
  providers: [CarsService],
  controllers: [CarsController]
})
export class CarsModule { }
