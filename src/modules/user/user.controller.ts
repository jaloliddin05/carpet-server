import { Request, Response } from "express";
import { UserService } from "./user.service";
import prisma from "../../db";
import { CreateUserDto, UpdateUserDto } from "./dto";

export const userService = new UserService(prisma);

export async function getAll(req: Request, res: Response) {
  try {
    const data = await userService.getAll();
    res.send(data);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function getById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const data = await userService.getById(id);
    res.send(data);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function create(req: Request, res: Response) {
  try {
    const data: CreateUserDto = req.body;
    const response = await userService.create(data);
    res.send(response);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function update(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const data: UpdateUserDto = req.body;
    const response = await userService.update(data, id);
    res.send(response);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function remove(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const response = await userService.remove(id);
    res.send(response);
  } catch (err) {
    res.status(500).send(err.message);
  }
}
