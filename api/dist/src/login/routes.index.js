"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const body_login_dto_1 = require("./dtos/body-login.dto");
const services_index_1 = require("../users/services.index");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const provisionalSectret = "123456789";
const loginRouter = (0, express_1.Router)();
loginRouter.post("/", async (req, res, next) => {
    try {
        const body = req.body;
        const parsedBody = body_login_dto_1.BodyLogin.parse(body);
        const userFromDb = await (0, services_index_1.getUserByEmail)(parsedBody.email);
        if (!userFromDb || userFromDb.password !== parsedBody.password) {
            return res.status(400).send("Incorrect email or password");
        }
        const payload = {
            id: userFromDb._id,
            email: userFromDb.email,
            name: userFromDb.name,
            isActive: userFromDb.isActive,
        };
        const token = jsonwebtoken_1.default.sign(payload, provisionalSectret);
        res.status(200).json({ token });
    }
    catch (error) {
        next(error);
    }
});
exports.default = loginRouter;
