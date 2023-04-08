import { Request, Response } from "express";
import { CategoryService } from "./category.service";
import prisma from "../../db";

const categoryService = new CategoryService(prisma);

export async function getAll(req: Request, res: Response) {
  try {
    const categories = await categoryService.getAll();
    res.send(categories);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function getById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const category = await categoryService.getById(id);
    res.send(category);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function create(req: Request, res: Response) {
  try {
    const data = req.body;
    const category = await categoryService.create(data);
    res.send(category);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function update(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const data = req.body;
    const category = await categoryService.update(data, id);
    res.send(category);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function remove(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const category = await categoryService.remove(id);
    res.send(category);
  } catch (err) {
    res.status(500).send(err.message);
  }
}
