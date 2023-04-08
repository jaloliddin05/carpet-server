import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

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

  @IsNotEmpty()
  @IsBoolean()
  isViewed: boolean;

  @IsNotEmpty()
  @IsString()
  productId?: string;
}

export default CreateOrderDto;
