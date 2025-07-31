"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = errorHandler;
const zod_1 = require("zod");
function errorHandler(err, req, res, next) {
    console.log(err);
    if (err instanceof zod_1.ZodError) {
        const issues = err.issues;
        return res.status(400).send({
            message: "Error validating request",
            issues: issues,
        });
    }
    if (err instanceof SyntaxError) {
        return res.status(400).send(err.message);
    }
    if (err instanceof TypeError) {
        return res.status(400).send(err.message);
    }
    if (err instanceof ReferenceError) {
        return res.status(400).send(err.message);
    }
    if (err instanceof Error) {
        return res.status(500).json({ message: err.message });
    }
    next(err);
}
