"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var routes_index_1 = require("./src/users/routes.index");
var error_1 = require("./src/middlewares/error");
var routes_index_2 = require("./src/login/routes.index");
var cors_1 = require("cors");
var PORT = process.env.PORT || 3000;
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api/user", routes_index_1.default);
app.use("/api/login", routes_index_2.default);
app.use(error_1.errorHandler);
app.listen(PORT, function () {
    console.log("Server is running on port 3000");
});
