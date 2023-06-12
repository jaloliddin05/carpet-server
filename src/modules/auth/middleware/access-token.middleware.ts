import { NextFunction, Response } from "express";
import { HttpException } from "../../../infra/validation";
import { authService } from "../auth.module";
import { ACCESS_TOKEN_ADMIN } from "../constanta";

const AccessTokenMiddleware = async (
  req,
  res: Response,
  next: NextFunction
) => {
  try {
    if (
      req.method == "GET" ||
      req.url == "/auth/login" ||
      req.url == "/auth/refresh" ||
      (req.method == "POST" && req.url == "/order") ||
      (req.method == "POST" && req.url == "/request") ||
      (req.method == "POST" && req.url == "/user") ||
      (req.method == "POST" && req.url == "/contact")
    ) {
      next();
      return;
    }

    const cookies = req?.headers?.cookie
      ?.split(";")
      ?.reduce((acc, curr: string) => {
        const [key, value] = curr?.split("=");
        acc[key?.trim()] = value;
        return acc;
      }, {});

    const token = cookies[ACCESS_TOKEN_ADMIN];

    const user = await authService.validateToken(token, "access");

    req.user = user;
    next();
  } catch (err) {
    res.status(400).send(new HttpException(true, 400, err.message));
  }
};

export default AccessTokenMiddleware;
