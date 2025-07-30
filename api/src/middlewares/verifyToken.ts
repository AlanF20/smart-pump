import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

const secretKey = "123456789";
export function verifyToken(req: Request, res: Response, next: NextFunction) {
  const header = req.header("Authorization") || "";
  const token = header.split(" ")[1];
  if (!token) {
    throw new Error("No token provided");
  }
  try {
    const payload = jwt.verify(token, secretKey) as JwtPayload;
    req.user = {
      id: payload.id,
      name: payload.name,
      email: payload.email,
    };
    next();
  } catch (error: unknown) {
    next(error);
  }
}
