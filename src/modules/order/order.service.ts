import { PrismaClient } from "@prisma/client";
import { CreateOrderDto, UpdateOrderDto } from "./dto";
import { IOrder } from "./interface";

export class OrderService {
  constructor(private readonly prismaClient: PrismaClient) {}

  async getAll(): Promise<IOrder[]> {
    const data = await this.prismaClient.order.findMany();
    return data;
  }

  async getById(id: string): Promise<IOrder> {
    const data = await this.prismaClient.order.findFirst({
      where: { id },
    });
    return data;
  }

  async create(data: CreateOrderDto) {
    const response = await this.prismaClient.order.create({ data });
    return response;
  }

  async update(data: UpdateOrderDto, id: string) {
    const response = await this.prismaClient.order.update({
      where: { id },
      data,
    });
    return response;
  }

  async remove(id: string) {
    const response = await this.prismaClient.order.delete({ where: { id } });
    return response;
  }
}
