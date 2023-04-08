import { Request, Response } from "express";
import { OrderService } from "./order.service";
import prisma from "../../db";
import { CreateOrderDto, UpdateOrderDto } from "./dto";

const orderService = new OrderService(prisma);

export async function getAll(req: Request, res: Response) {
  try {
    const data = await orderService.getAll();
    res.send(data);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function getById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const data = await orderService.getById(id);
    res.send(data);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function create(req: Request, res: Response) {
  try {
    const data: CreateOrderDto = req.body;
    const response = await orderService.create(data);
    res.send(response);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function update(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const data: UpdateOrderDto = req.body;
    const response = await orderService.update(data, id);
    res.send(response);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function remove(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const response = await orderService.remove(id);
    res.send(response);
  } catch (err) {
    res.status(500).send(err.message);
  }
}
