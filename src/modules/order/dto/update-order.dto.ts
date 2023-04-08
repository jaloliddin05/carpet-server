import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";

class UpdateOrderDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  phoneNumber: string;

  @IsOptional()
  @IsString()
  address: string;

  @IsOptional()
  @IsNumber()
  count: number;

  @IsOptional()
  @IsBoolean()
  isViewed: boolean;

  @IsOptional()
  @IsString()
  productId?: string;
}

export default UpdateOrderDto;
