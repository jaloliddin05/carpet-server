import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

class CreateRequestDto {
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
  @IsBoolean()
  isViewed: boolean;
}

export default CreateRequestDto;
