import { Request, Response } from "express";
import { ContactService } from "./contact.service";
import prisma from "../../db";
import { CreateContactDto, UpdateContactDto } from "./dto";

const contactService = new ContactService(prisma);

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
    const data: CreateContactDto = req.body;
    const response = await contactService.create(data);
    res.send(response);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function update(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const data: UpdateContactDto = req.body;
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
