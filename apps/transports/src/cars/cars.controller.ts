import { BadRequestException, Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDTO } from './dto/cars.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) { }

  @Post()
  createCar(@Body() createCarDTO: CreateCarDTO) {
    return this.carsService.registerCar(createCarDTO);
  }

  @Get()
  findAllAvailables() {
    return this.carsService.listAvailableCars();
  }

  @Delete(':id')
  deleteCar(@Param('id') id: string) {
    return this.carsService.deleteCar(id);
  }
}
