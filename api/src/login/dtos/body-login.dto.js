"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BodyLogin = void 0;
var z = require("zod");
exports.BodyLogin = z.object({
    email: z.string(),
    password: z.string(),
});
