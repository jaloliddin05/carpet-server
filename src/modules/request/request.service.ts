import { PrismaClient } from "@prisma/client";
import { CreateRequestDto, UpdateRequestDto } from "./dto";
import { IRequest } from "./interface";

export class RequestService {
  constructor(private readonly prismaClient: PrismaClient) {}

  async getAll(): Promise<IRequest[]> {
    const data = await this.prismaClient.request.findMany();
    return data;
  }

  async getById(id: string): Promise<IRequest> {
    const data = await this.prismaClient.request.findFirst({
      where: { id },
    });
    return data;
  }

  async create(data: CreateRequestDto) {
    const response = await this.prismaClient.request.create({ data });
    return response;
  }

  async update(data: UpdateRequestDto, id: string) {
    const response = await this.prismaClient.request.update({
      where: { id },
      data,
    });
    return response;
  }

  async remove(id: string) {
    const response = await this.prismaClient.request.delete({ where: { id } });
    return response;
  }
}
