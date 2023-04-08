import * as bcrypt from "bcrypt";

async function HashPassword(password: string) {
  return await bcrypt.hash(password, 10);
}

export default HashPassword;
