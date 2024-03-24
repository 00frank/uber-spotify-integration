import { Controller, Get } from '@nestjs/common';
import { TransportsService } from './transports.service';

@Controller('transports')
export class TransportsController {
  constructor(private readonly transportsService: TransportsService) { }

  //TODO: implement logic to return trips from userId
  @Get()
  getTripsFromPassenger() {
    return this.transportsService.findAll();
  }
}
