import { PrismaClient } from "@prisma/client";
import { CreateCategoryDto, UpdateCategoryDto } from "./dto";
import { ICategory } from "./interface";

export class CategoryService {
  constructor(private readonly prismaClient: PrismaClient) {}

  async getAll(): Promise<ICategory[]> {
    const categories = await this.prismaClient.category.findMany();
    return categories;
  }

  async getById(id: string): Promise<ICategory> {
    const category = await this.prismaClient.category.findFirst({
      where: { id },
    });
    return category;
  }

  async create(data: CreateCategoryDto) {
    const response = await this.prismaClient.category.create({ data });
    return response;
  }

  async update(data: UpdateCategoryDto, id: string) {
    const response = await this.prismaClient.category.update({
      where: { id },
      data,
    });
    return response;
  }

  async remove(id: string) {
    const response = await this.prismaClient.category.delete({ where: { id } });
    return response;
  }
}
