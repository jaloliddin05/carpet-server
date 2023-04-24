import { PrismaClient } from "@prisma/client";
import { CreateUserDto, UpdateUserDto } from "./dto";
import { IUser } from "./interface";
import { HashPassword } from "../../infra/helpers";

export class UserService {
  constructor(private readonly prismaClient: PrismaClient) {}

  async getAll(): Promise<IUser[]> {
    const data = await this.prismaClient.user.findMany();
    return data;
  }

  async getById(id: string): Promise<IUser> {
    const data = await this.prismaClient.user.findFirst({
      where: { id },
    });
    return data;
  }

  async getByUsername(username: string): Promise<IUser> {
    const data = await this.prismaClient.user.findFirst({
      where: { username },
    });
    return data;
  }

  async create(data: CreateUserDto) {
    data.password = await HashPassword(data.password);
    const response = await this.prismaClient.user.create({ data });
    return response;
  }

  async update(data: UpdateUserDto, id: string) {
    if (data.password) {
      data.password = await HashPassword(data.password);
    }
    const response = await this.prismaClient.user.update({
      where: { id },
      data,
    });
    return response;
  }

  async remove(id: string) {
    const response = await this.prismaClient.user.delete({ where: { id } });
    return response;
  }
}
