"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserBalance = exports.getUserByEmail = exports.updateUser = exports.createUser = exports.getUser = exports.getUsers = void 0;
const db_1 = __importDefault(require("../db"));
const response_user_dto_1 = require("./dtos/response-user.dto");
const update_user_dto_1 = require("./dtos/update-user.dto");
const getUsers = async () => {
    await db_1.default.read();
    return db_1.default?.data?.users.map((user) => response_user_dto_1.UserResponse.parse(user));
};
exports.getUsers = getUsers;
const getUser = async (id) => {
    await db_1.default.read();
    return response_user_dto_1.UserResponse.parse(db_1.default?.data?.users.find((user) => user._id === id));
};
exports.getUser = getUser;
const createUser = async (user) => {
    await db_1.default.read();
    db_1.default?.data?.users.push(user);
    await db_1.default.write();
    return response_user_dto_1.UserResponse.parse(user);
};
exports.createUser = createUser;
const updateUser = async (id, updatedData) => {
    try {
        await db_1.default.read();
        const parsedUser = update_user_dto_1.updateUserDto.parse(updatedData);
        if (!db_1.default.data)
            throw new Error("Database not found");
        const index = db_1.default?.data?.users.findIndex((user) => user._id === id);
        if (index !== -1) {
            db_1.default.data.users[index] = {
                ...db_1.default.data.users[index],
                ...parsedUser,
            };
            await db_1.default.write();
            return db_1.default.data.users[index];
        }
        return null;
    }
    catch (error) {
        console.log(error);
        throw new Error("Error updating user");
    }
};
exports.updateUser = updateUser;
const getUserByEmail = async (email) => {
    await db_1.default.read();
    return db_1.default?.data?.users.find((user) => user.email === email);
};
exports.getUserByEmail = getUserByEmail;
const getUserBalance = async (id) => {
    await db_1.default.read();
    return db_1.default?.data?.users.find((user) => user._id === id)?.balance;
};
exports.getUserBalance = getUserBalance;
