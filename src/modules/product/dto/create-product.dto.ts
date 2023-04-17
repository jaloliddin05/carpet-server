import { IsArray, IsNotEmpty, IsOptional, IsString } from "class-validator";

class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  img: string[];

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
  color: string;

  @IsNotEmpty()
  @IsString()
  categoryId: string;
}

export default CreateProductDto;
