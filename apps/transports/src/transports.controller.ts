import { Controller, Get } from '@nestjs/common';
import { TransportsService } from './transports.service';

@Controller()
export class TransportsController {
  constructor(private readonly transportsService: TransportsService) {}

  @Get()
  getHello(): string {
    return this.transportsService.getHello();
  }
}
