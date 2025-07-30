import express from "express";
import userRouter from "./src/users/routes.index";
import { errorHandler } from "./src/middlewares/error";
import loginRouter from "./src/login/routes.index";
import cors from "cors";

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/login", loginRouter);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
