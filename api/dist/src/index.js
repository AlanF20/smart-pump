"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_index_1 = __importDefault(require("./users/routes.index"));
const routes_index_2 = __importDefault(require("./login/routes.index"));
const error_1 = require("./middlewares/error");
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api/user", routes_index_1.default);
app.use("/api/login", routes_index_2.default);
app.use(error_1.errorHandler);
app.listen(PORT, () => {
    console.log("Server is running on port 3000");
});
