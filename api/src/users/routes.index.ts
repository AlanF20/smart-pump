import { Router } from "express";
import { createUser, getUser, getUsers } from "./services.index";
import { verifyToken } from "../middlewares/verifyToken";

const userRouter = Router();

userRouter
  .get("/", verifyToken, async (req, res, next) => {
    try {
      const users = await getUsers();
      res.status(200).send(users);
    } catch (error: unknown) {
      next(error);
    }
  })
  .get("/:id", async (req, res, next) => {
    try {
      const user = await getUser(req.params.id);
      res.status(200).send(user);
    } catch (error: unknown) {
      next(error);
    }
  })
  .post("/", async (req, res, next) => {
    try {
      const user = await createUser(req.body);
      res.status(201).send(user);
    } catch (error: unknown) {
      next(error);
    }
  });

export default userRouter;
