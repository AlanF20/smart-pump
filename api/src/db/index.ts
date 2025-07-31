import { join } from "path";
import { Low, JSONFile } from "lowdb";
import { Data } from "../../types";
import dotenv from "dotenv";

dotenv.config();
const folderUp =
  process.env.NODE_ENV === "production" ? "../../../.." : "../../..";
const file = join(__dirname, folderUp, "data/users.json");
console.log(file, process.env.NODE_ENV);
const adapter = new JSONFile<Data>(file);
const db = new Low<Data>(adapter);

export default db;
