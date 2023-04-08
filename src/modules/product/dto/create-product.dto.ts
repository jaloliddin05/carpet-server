import { IsArray, IsNotEmpty, IsString } from "class-validator";

class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsArray()
  imgs: string[];

  @IsNotEmpty()
  @IsArray()
  size: string[];

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  price: string;

  @IsNotEmpty()
  @IsString()
  categoryId: string;
}

export default CreateProductDto;
