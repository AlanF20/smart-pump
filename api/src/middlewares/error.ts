import { NextFunction } from "express";
import { ZodError } from "zod";
import { Response, Request } from "express";
export function errorHandler(
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.log(err);
  if (err instanceof ZodError) {
    const issues = err.issues;
    return res.status(400).send({
      message: "Error validating request",
      issues: issues,
    });
  }
  if (err instanceof SyntaxError) {
    return res.status(400).send(err.message);
  }
  if (err instanceof TypeError) {
    return res.status(400).send(err.message);
  }
  if (err instanceof ReferenceError) {
    return res.status(400).send(err.message);
  }
  if (err instanceof Error) {
    return res.status(500).json({ message: err.message });
  }
  next(err);
}
