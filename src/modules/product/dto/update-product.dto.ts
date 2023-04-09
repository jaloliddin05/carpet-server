import { IsArray, IsOptional, IsString } from "class-validator";

class UpdateProductDto {
  @IsOptional()
  @IsString()
  title: string;

  @IsOptional()
  @IsArray()
  imgs: string[];

  @IsOptional()
  @IsArray()
  size: string[];

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  price: string;

  @IsOptional()
  @IsString()
  color: string;

  @IsOptional()
  @IsString()
  categoryId: string;
}

export default UpdateProductDto;
