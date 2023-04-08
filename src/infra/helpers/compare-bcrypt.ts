import * as bcrypt from "bcrypt";

const ComparePassword = (comingPassword: string, mainPassword: string) => {
  return bcrypt.compare(comingPassword, mainPassword);
};

export default ComparePassword;
