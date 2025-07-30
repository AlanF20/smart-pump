import { User } from "../../types";
import db from "../db";
import { UserResponse } from "./dtos/response-user.dto";
import { updateUserDto } from "./dtos/update-user.dto";

export const getUsers = async () => {
  await db.read();
  return db?.data?.users.map((user) => UserResponse.parse(user));
};

export const getUser = async (id: string) => {
  await db.read();
  return UserResponse.parse(db?.data?.users.find((user) => user._id === id));
};

export const createUser = async (user: User) => {
  await db.read();
  db?.data?.users.push(user);
  await db.write();
  return UserResponse.parse(user);
};

export const updateUser = async (id: string, updatedData: User) => {
  try {
    await db.read();
    const parsedUser = updateUserDto.parse(updatedData);
    if (!db.data) throw new Error("Database not found");
    const index = db?.data?.users.findIndex((user) => user._id === id);
    if (index !== -1) {
      db.data.users[index] = {
        ...db.data.users[index],
        ...parsedUser,
      };
      await db.write();
      return db.data.users[index];
    }
    return null;
  } catch (error: unknown) {
    console.log(error);
    throw new Error("Error updating user");
  }
};

export const getUserByEmail = async (email: string) => {
  await db.read();
  return db?.data?.users.find((user) => user.email === email);
};

export const getUserBalance = async (id: string) => {
  await db.read();
  return db?.data?.users.find((user) => user._id === id)?.balance;
};
