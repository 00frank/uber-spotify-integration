import { Injectable } from '@nestjs/common';
import { ITrip, TripStatus } from './interfaces';

@Injectable()
export class TransportsService {
  async findAll(): Promise<ITrip[]> {
    return [
      {
        id: '2',
        date: new Date(),
        destination: 'Paris',
        origin: 'London',
        status: TripStatus.FINISHED,
        driver: {
          name: 'John Doe',
          avatar: 'https://randomuser.me/api/portraits/men/19.jpg',
          stars: 4.5,
          totalTrips: 120
        },
        car: {
          brand: 'Toyota',
          color: 'Blue',
          model: 'Yaris',
          patent: 'ABC123',
          year: 2019
        }
      }
    ]
  }
}
