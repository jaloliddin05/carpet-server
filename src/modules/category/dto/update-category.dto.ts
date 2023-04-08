import { IsArray, IsOptional, IsString } from "class-validator";

class UpdateCategoryDto {
  @IsOptional()
  @IsString()
  name: string;
}

export default UpdateCategoryDto;
