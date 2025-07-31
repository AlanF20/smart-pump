"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const lowdb_1 = require("lowdb");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const folderUp = process.env.NODE_ENV === "production" ? "../../../.." : "../../..";
const file = (0, path_1.join)(__dirname, folderUp, "data/users.json");
console.log(file, process.env.NODE_ENV);
const adapter = new lowdb_1.JSONFile(file);
const db = new lowdb_1.Low(adapter);
exports.default = db;
