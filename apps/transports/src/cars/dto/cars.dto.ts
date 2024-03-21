import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCarDTO {
  @IsString()
  @IsNotEmpty()
  brand: string;

  @IsString()
  @IsNotEmpty()
  model: string;

  @IsString()
  @IsNotEmpty()
  color: string;

  @IsString()
  @IsNotEmpty()
  patent: string;

  @IsNumber()
  @IsNotEmpty()
  year: number;
}