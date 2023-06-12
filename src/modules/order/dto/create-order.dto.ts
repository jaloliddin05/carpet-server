import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from "class-validator";

class CreateOrderDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  phoneNumber: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsNumber()
  count: number;

  @IsOptional()
  @IsBoolean()
  isViewed: boolean;

  @IsNotEmpty()
  @IsString()
  productId?: string;
}

export default CreateOrderDto;
