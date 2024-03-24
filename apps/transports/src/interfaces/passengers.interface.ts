import { ITrip } from "./trips.interface";

export class IPassenger {
  name: string;
  avatar: string;
  currentTrip: null | ITrip;
  totalTrips: number;
  stars: number;
}