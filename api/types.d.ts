export type User = {
  id: string;
  guid: string;
  isActive: boolean;
  balance: string;
  picture: string;
  age: number;
  eyeColor: string;
  name: Name;
  company: string;
  email: string;
  password: string;
  phone: string;
  address: string;
};

export type Name = {
  first: string;
  last: string;
};
export type Data = {
  users: User[];
};
declare module "express-serve-static-core" {
  interface Request {
    user: {
      id: string;
      name: Name;
      email: string;
    };
  }
}
interface JwtPayload {
  _id: string;
  name: Name;
  email: string;
}
