import { NextFunction } from "express";
import { Response, Request } from "express";
export declare function errorHandler(err: unknown, req: Request, res: Response, next: NextFunction): Response<any, Record<string, any>> | undefined;
