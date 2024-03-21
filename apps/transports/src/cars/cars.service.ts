import { BadRequestException, Injectable } from '@nestjs/common';
import { ICar } from '../interfaces';
import { Car } from './model/cars.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCarDTO } from './dto/cars.dto';

@Injectable()
export class CarsService {
  constructor(@InjectModel(Car.name) private readonly carModel: Model<Car>) { }

  async registerCar(createCarDTO: CreateCarDTO): Promise<ICar> {
    const existingCarWithPatent = await this.carModel.findOne({ patent: createCarDTO.patent });
    if (existingCarWithPatent)
      throw new BadRequestException('Car with given patent already exists');
    return this.carModel.create(createCarDTO);
  }

  async listAvailableCars(): Promise<ICar[]> {
    return this.carModel.find({});
  }

  async deleteCar(id: string): Promise<ICar> {
    const searchedCar = await this.carModel.findOne({ _id: id });
    if (!searchedCar)
      throw new BadRequestException('Car with given id not found');
    return this.carModel.findByIdAndDelete(id);
  }
}
