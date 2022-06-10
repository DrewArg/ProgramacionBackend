import { getConfig } from "./knexConfig.js";
import createKnex from "knex";

const sqlClientAdmin = createKnex(getConfig("ADMIN"));
const sqlClientUser = createKnex(getConfig("USER"));

export { sqlClientAdmin, sqlClientUser };
