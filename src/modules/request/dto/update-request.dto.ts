import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";

class UpdateRequestDto {
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
  @IsBoolean()
  isViewed: boolean;
}

export default UpdateRequestDto;
