import { Injectable } from '@nestjs/common';

@Injectable()
export class TransportsService {
  getHello(): string {
    return 'Hello World!';
  }
}
