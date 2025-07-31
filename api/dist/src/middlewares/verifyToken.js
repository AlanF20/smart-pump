"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = verifyToken;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secretKey = "123456789";
function verifyToken(req, res, next) {
    const header = req.header("Authorization") || "";
    const token = header.split(" ")[1];
    if (!token) {
        throw new Error("No token provided");
    }
    try {
        const payload = jsonwebtoken_1.default.verify(token, secretKey);
        req.user = {
            id: payload.id,
            name: payload.name,
            email: payload.email,
        };
        next();
    }
    catch (error) {
        next(error);
    }
}
