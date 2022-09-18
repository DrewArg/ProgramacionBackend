import crypto from 'crypto'
import User from '../models/User.js'

import { usersDao } from "../daos/daoIndex.js";

//TODO actualmente está tomando data de memoria, actualizar para mongodb
const usersMap = {}

export const getUsers = (key, value) => {
    const users = Object.values(usersMap)
    if (key && value) {
        return users.filter(u => u[key] === value)
    } else {
        return users
    }
}

export const getUser = (id) => {
    if (!usersMap[id]) {
        throw new Error('User not found')
    }

    return usersMap[id]
}

export const saveUser = (userData) => {
    if (!isUniqueUsername(userData.username)) {
        throw new Error(`El nombre de usuario ya existe`)
    }
    const id = crypto.randomBytes(10).toString('hex')
    const newUser = new User(id, userData)
    usersMap[id] = newUser.userData()
    return newUser.userData()
}

export const updateUser = (id, newData) => {
    if (!usersMap[id]) {
        throw new Error('User not found')
    }

    const oldData = usersMap[id]
    const data = { ...oldData, ...newData }
    const updatedUser = new User(id, data)
    usersMap[id] = updatedUser.userData()
    return updatedUser.userData()
}

export const deleteUser = (id) => {
    if (!usersMap[id]) {
        throw new Error(`User not found`)
    }

    const deletedUser = usersMap[id]
    delete usersMap[id]
    return deletedUser
}

export const isUniqueUsername = async (username) => {
    try {
        const users = await getUsers();
        console.log(users);
        if (users.length > 0) {
            const user = users.find(u => u.username === username)
            if (user) {
                return false
            }
        }
        return true

    } catch (error) {
        console.error("User Controller --> " + error);
    }
}

