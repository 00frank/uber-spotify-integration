import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type CarDocument = HydratedDocument<Car>;

@Schema({ timestamps: true })
export class Car {
  @Prop()
  brand: string;

  @Prop()
  model: string;

  @Prop()
  color: string;

  @Prop()
  patent: string;

  @Prop()
  year: number;
}

export const CarSchema = SchemaFactory.createForClass(Car);