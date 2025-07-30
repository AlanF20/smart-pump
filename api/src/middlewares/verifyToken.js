"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = verifyToken;
var jsonwebtoken_1 = require("jsonwebtoken");
var secretKey = "123456789";
function verifyToken(req, res, next) {
    var header = req.header("Authorization") || "";
    var token = header.split(" ")[1];
    if (!token) {
        throw new Error("No token provided");
    }
    try {
        var payload = jsonwebtoken_1.default.verify(token, secretKey);
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
