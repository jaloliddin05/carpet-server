import { PrismaClient } from "@prisma/client";
import { CreateContactDto, UpdateContactDto } from "./dto";
import { IContact } from "./interface";

export class ContactService {
  constructor(private readonly prismaClient: PrismaClient) {}

  async getAll(): Promise<IContact[]> {
    const data = await this.prismaClient.contact.findMany();
    return data;
  }

  async getById(id: string): Promise<IContact> {
    const data = await this.prismaClient.contact.findFirst({
      where: { id },
    });
    return data;
  }

  async create(data: CreateContactDto) {
    const response = await this.prismaClient.contact.create({ data });
    return response;
  }

  async update(data: UpdateContactDto, id: string) {
    const response = await this.prismaClient.contact.update({
      where: { id },
      data,
    });
    return response;
  }

  async remove(id: string) {
    const response = await this.prismaClient.contact.delete({ where: { id } });
    return response;
  }
}
