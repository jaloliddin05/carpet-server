import { Request, Response } from "express";
import { ProductService } from "./product.service";
import prisma from "../../db";
import { CreateProductDto, UpdateProductDto } from "./dto";

const productService = new ProductService(prisma);

export async function getAll(req: Request, res: Response) {
  try {
    const data = await productService.getAll(req["where"]);
    res.send(data);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function getById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const data = await productService.getById(id);
    res.send(data);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function create(req: Request, res: Response) {
  try {
    const data: CreateProductDto = req.body;
    const response = await productService.create(data);
    res.send(response);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function update(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const data: UpdateProductDto = req.body;
    const response = await productService.update(data, id);
    res.send(response);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function remove(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const response = await productService.remove(id);
    res.send(response);
  } catch (err) {
    res.status(500).send(err.message);
  }
}
