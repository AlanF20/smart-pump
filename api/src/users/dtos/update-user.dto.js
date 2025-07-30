"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserDto = void 0;
var zod_1 = require("zod");
exports.updateUserDto = zod_1.z.object({
    name: zod_1.z
        .object({
        first: zod_1.z.string(),
        last: zod_1.z.string(),
    })
        .optional(),
    email: zod_1.z.string().optional(),
    password: zod_1.z.string().optional(),
    phone: zod_1.z.string().optional(),
    address: zod_1.z.string().optional(),
    company: zod_1.z.string().optional(),
    picture: zod_1.z.string().optional(),
    age: zod_1.z.number().optional(),
    eyeColor: zod_1.z.string().optional(),
    balance: zod_1.z.string().optional(),
    guid: zod_1.z.string().optional(),
    isActive: zod_1.z.boolean().optional(),
});
