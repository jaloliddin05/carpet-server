import { IsNotEmpty, IsString } from "class-validator";

class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}

export default CreateUserDto;
