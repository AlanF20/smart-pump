import { Router } from "express";
import {
  createUser,
  getUser,
  getUserBalance,
  getUsers,
  updateUser,
} from "./services.index";
import { verifyToken } from "../middlewares/verifyToken";

const userRouter = Router();

userRouter.get("/", verifyToken, async (_, res, next) => {
  try {
    const users = await getUsers();
    res.status(200).send(users);
  } catch (error: unknown) {
    next(error);
  }
});
userRouter.get("/session", verifyToken, async (req, res, next) => {
  try {
    const user = await getUser(req.user.id);
    res.status(200).send(user);
  } catch (error: unknown) {
    next(error);
  }
});
userRouter.get("/balance", verifyToken, async (req, res, next) => {
  try {
    const balance = await getUserBalance(req.user.id);
    res.status(200).json({ balance });
  } catch (error: unknown) {
    next(error);
  }
});
userRouter.post("/", async (req, res, next) => {
  try {
    const user = await createUser(req.body);
    res.status(201).send(user);
  } catch (error: unknown) {
    next(error);
  }
});
userRouter.put("/edit", verifyToken, async (req, res, next) => {
  try {
    const user = await updateUser(req.user.id, req.body);
    res.status(200).json(user);
  } catch (error: unknown) {
    next(error);
  }
});

export default userRouter;
