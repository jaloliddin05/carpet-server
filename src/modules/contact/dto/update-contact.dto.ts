import { IsOptional, IsString } from "class-validator";

class UpdateContactDto {
  @IsOptional()
  @IsString()
  gmail: string;

  @IsOptional()
  @IsString()
  phoneNumber: string;

  @IsOptional()
  @IsString()
  location: string;

  @IsOptional()
  @IsString()
  workTimeStart: string;

  @IsOptional()
  @IsString()
  workTimeFinish: string;
}

export default UpdateContactDto;
