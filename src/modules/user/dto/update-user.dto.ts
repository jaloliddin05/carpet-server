import { IsOptional, IsString } from "class-validator";

class UpdateUserDto {
  @IsOptional()
  @IsString()
  username: string;

  @IsOptional()
  @IsString()
  password: string;
}

export default UpdateUserDto;
