import { PrismaClient } from "@prisma/client";

export class CategoryService {
  constructor(private readonly prismaClient: PrismaClient) {}

  async getAll() {
    const categories = await this.prismaClient.category.findMany();
    return categories;
  }

  async getById(id: string) {
    const category = await this.prismaClient.category.findFirst({
      where: { id },
    });
    return category;
  }

  async create(data) {
    const response = await this.prismaClient.category.create({ data });
    return response;
  }

  async update(data, id: string) {
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
