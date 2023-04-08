import { Request, Response } from "express";
import { RequestService } from "./request.service";
import prisma from "../../db";
import { CreateRequestDto, UpdateRequestDto } from "./dto";

const requestService = new RequestService(prisma);

export async function getAll(req: Request, res: Response) {
  try {
    const data = await requestService.getAll();
    res.send(data);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function getById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const data = await requestService.getById(id);
    res.send(data);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function create(req: Request, res: Response) {
  try {
    const data: CreateRequestDto = req.body;
    const response = await requestService.create(data);
    res.send(response);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function update(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const data: UpdateRequestDto = req.body;
    const response = await requestService.update(data, id);
    res.send(response);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function remove(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const response = await requestService.remove(id);
    res.send(response);
  } catch (err) {
    res.status(500).send(err.message);
  }
}
