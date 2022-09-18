import { generateId } from "./Id.js";

export const createUser = ({ id = generateId(), username, password }) => {
    if (!username) throw new Error(`MISSING_ARGS: el campo 'username' es obligatorio`)
    if (!password) throw new Error(`MISSING_ARGS: el campo 'password' es obligatorio`)

    return {
        id,
        username,
        password
    }
}