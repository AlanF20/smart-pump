import express from "express";
import cors from "cors";
import userRouter from "./users/routes.index";
import loginRouter from "./login/routes.index";
import { errorHandler } from "./middlewares/error";

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
