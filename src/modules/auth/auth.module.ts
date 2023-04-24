import { JWTService } from "./jwt.service";
import { AuthService } from "./auth.service";
import { userService } from "../user/user.controller";

const jwtService = new JWTService();

export const authService = new AuthService(userService, jwtService);
