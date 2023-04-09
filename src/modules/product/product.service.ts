import { PrismaClient } from "@prisma/client";
import { CreateProductDto, UpdateProductDto } from "./dto";
import { IProduct } from "./interface";

export class ProductService {
  constructor(private readonly prismaClient: PrismaClient) {}

  async getAll(where): Promise<IProduct[]> {
    const data = await this.prismaClient.product.findMany({ where });
    return data;
  }

  async getById(id: string): Promise<IProduct> {
    const data = await this.prismaClient.product.findFirst({
      where: { id },
      include: {
        category: true,
      },
    });
    return data;
  }

  async create(data: CreateProductDto) {
    const response = await this.prismaClient.product.create({ data });
    return response;
  }

  async update(data: UpdateProductDto, id: string) {
    const response = await this.prismaClient.product.update({
      where: { id },
      data,
    });
    return response;
  }

  async remove(id: string) {
    const response = await this.prismaClient.product.delete({ where: { id } });
    return response;
  }
}
