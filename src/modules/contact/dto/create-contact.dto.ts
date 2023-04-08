import { IsNotEmpty, IsString } from "class-validator";

class CreateContactDto {
  @IsNotEmpty()
  @IsString()
  gmail: string;

  @IsNotEmpty()
  @IsString()
  phoneNumber: string;

  @IsNotEmpty()
  @IsString()
  location: string;

  @IsNotEmpty()
  @IsString()
  workTimeStart: string;

  @IsNotEmpty()
  @IsString()
  workTimeFinish: string;
}

export default CreateContactDto;
