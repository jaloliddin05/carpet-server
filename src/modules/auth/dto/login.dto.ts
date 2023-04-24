import { IsNotEmpty, IsString } from "class-validator";
class LoginDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}

export default LoginDto;
