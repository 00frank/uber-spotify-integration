import { Module } from '@nestjs/common';
import { TransportsController } from './transports.controller';
import { TransportsService } from './transports.service';

@Module({
  imports: [],
  controllers: [TransportsController],
  providers: [TransportsService],
})
export class TransportsModule {}
