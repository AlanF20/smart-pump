import { Router } from "express";
import { BodyLogin } from "./dtos/body-login.dto";
import jwt from "jsonwebtoken";
import { getUserByEmail } from "../users/services.index";

const provisionalSectret = "123456789";
const loginRouter = Router();

loginRouter.post("/", async (req, res, next) => {
  try {
    const body = req.body;
    const parsedBody = BodyLogin.parse(body);
    const userFromDb = await getUserByEmail(parsedBody.email);
    if (!userFromDb || userFromDb.password !== parsedBody.password) {
      return res.status(400).send("Incorrect email or password");
    }
    const payload = {
      id: userFromDb.id,
      email: userFromDb.email,
      name: userFromDb.name,
      isActive: userFromDb.isActive,
    };
    const token = jwt.sign(payload, provisionalSectret);
    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
});

export default loginRouter;
