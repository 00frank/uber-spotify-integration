import { ICar } from "./cars.interface";
import { IDriver } from "./drivers.interface";

export enum TripStatus {
  REQUESTED = 'requested',
  CANCELED = 'canceled',
  FINISHED = 'finished',
  IN_PROGRESS = 'in_progress',
}

export class ITrip {
  id: string;
  driver: IDriver;
  car: ICar;
  date: Date;
  status: TripStatus;
  origin: string;
  destination: string;
}