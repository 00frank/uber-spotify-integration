import { Test, TestingModule } from '@nestjs/testing';
import { TransportsController } from './transports.controller';
import { TransportsService } from './transports.service';

describe('TransportsController', () => {
  let transportsController: TransportsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [TransportsController],
      providers: [TransportsService],
    }).compile();

    transportsController = app.get<TransportsController>(TransportsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(transportsController.getHello()).toBe('Hello World!');
    });
  });
});
