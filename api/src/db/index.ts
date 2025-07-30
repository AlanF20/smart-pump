import { join } from "path";
import { Low, JSONFile } from "lowdb";
import { Data } from "../../types";

const file = join(__dirname, "../../..", "data/users.json");
const adapter = new JSONFile<Data>(file);
const db = new Low<Data>(adapter);

export default db;
