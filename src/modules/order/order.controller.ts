import { Request, Response } from "express";
import { OrderService } from "./order.service";
import prisma from "../../db";
import { CreateOrderDto, UpdateOrderDto } from "./dto";

const contactService = new OrderService(prisma);

export async function getAll(req: Request, res: Response) {
  try {
    const data = await contactService.getAll();
    res.send(data);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function getById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const data = await contactService.getById(id);
    res.send(data);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function create(req: Request, res: Response) {
  try {
    const data: CreateOrderDto = req.body;
    const response = await contactService.create(data);
    res.send(response);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function update(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const data: UpdateOrderDto = req.body;
    const response = await contactService.update(data, id);
    res.send(response);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function remove(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const response = await contactService.remove(id);
    res.send(response);
  } catch (err) {
    res.status(500).send(err.message);
  }
}
