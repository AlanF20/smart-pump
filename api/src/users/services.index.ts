import { User } from "../../types";
import db from "../db";
import { UserResponse } from "./dtos/response-user.dto";

export const getUsers = async () => {
  await db.read();
  return db?.data?.users.map((user) => UserResponse.parse(user));
};

export const getUser = async (id: string) => {
  await db.read();
  return UserResponse.parse(db?.data?.users.find((user) => user.id === id));
};

export const createUser = async (user: User) => {
  await db.read();
  db?.data?.users.push(user);
  await db.write();
  return UserResponse.parse(user);
};

export const updateUser = async (id: string, user: User) => {
  await db.read();
  if (!db.data) throw new Error("Database not found");
  const index = db?.data?.users.findIndex((user) => user.id === id);
  if (!user || !index) throw new Error("User not found");
  if (index !== -1) {
    db.data.users[index] = user;
    await db.write();
    return user;
  }
  return null;
};

export const getUserByEmail = async (email: string) => {
  await db.read();
  return db?.data?.users.find((user) => user.email === email);
};
