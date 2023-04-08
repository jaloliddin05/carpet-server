import { IsNotEmpty, IsString } from "class-validator";

class CreateCategoryDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}

export default CreateCategoryDto;
