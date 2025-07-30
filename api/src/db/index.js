"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var lowdb_1 = require("lowdb");
var file = (0, path_1.join)(__dirname, "../../..", "data/users.json");
var adapter = new lowdb_1.JSONFile(file);
var db = new lowdb_1.Low(adapter);
exports.default = db;
