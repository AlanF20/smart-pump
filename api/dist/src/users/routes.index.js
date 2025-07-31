"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const services_index_1 = require("./services.index");
const verifyToken_1 = require("../middlewares/verifyToken");
const userRouter = (0, express_1.Router)();
userRouter.get("/", verifyToken_1.verifyToken, async (_, res, next) => {
    try {
        const users = await (0, services_index_1.getUsers)();
        res.status(200).send(users);
    }
    catch (error) {
        next(error);
    }
});
userRouter.get("/session", verifyToken_1.verifyToken, async (req, res, next) => {
    try {
        const user = await (0, services_index_1.getUser)(req.user.id);
        res.status(200).send(user);
    }
    catch (error) {
        next(error);
    }
});
userRouter.get("/balance", verifyToken_1.verifyToken, async (req, res, next) => {
    try {
        const balance = await (0, services_index_1.getUserBalance)(req.user.id);
        res.status(200).json({ balance });
    }
    catch (error) {
        next(error);
    }
});
userRouter.post("/", async (req, res, next) => {
    try {
        const user = await (0, services_index_1.createUser)(req.body);
        res.status(201).send(user);
    }
    catch (error) {
        next(error);
    }
});
userRouter.put("/edit", verifyToken_1.verifyToken, async (req, res, next) => {
    try {
        const user = await (0, services_index_1.updateUser)(req.user.id, req.body);
        res.status(200).json(user);
    }
    catch (error) {
        next(error);
    }
});
exports.default = userRouter;
