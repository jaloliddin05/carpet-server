import { ComparePassword } from "../../infra/helpers";
import { HttpException } from "../../infra/validation";
import { UserService } from "../user/user.service";
import { JWTService } from "./jwt.service";

export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JWTService
  ) {}

  async validateAdminByUsernamePassword(username: string, password: string) {
    const user = await this.userService.getByUsername(username);
    if (!user) {
      throw new HttpException(true, 400, "Username  not found");
    }
    const isPasswordSame = await ComparePassword(password, user.password);
    if (!isPasswordSame) {
      throw new HttpException(true, 400, "Invalid password");
    }
    return user;
  }

  async validateUserById(userId: string) {
    const user = await this.userService.getById(userId).catch(() => {
      throw new HttpException(true, 400, "Valid token with non-existent user.");
    });
    return user;
  }

  async validateToken(token: string, type: "access" | "refresh") {
    try {
      const sub = this.jwtService.verifyToken(token, type);
      const admin = await this.userService.getById(sub);
      return admin;
    } catch (err) {
      throw new HttpException(true, 400, "Invalid token");
    }
  }

  getJWT(type: "access" | "refresh", sub: string) {
    return this.jwtService.getJwt(sub, type);
  }
}
