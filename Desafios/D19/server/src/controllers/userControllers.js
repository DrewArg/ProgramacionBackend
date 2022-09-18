import * as users from '../service/userService.js'

export const getUsers = ({ key, value }) => {
    return users.getUsers(key, value)
}

export const getUser = ({ id }) => {
    return users.getUser(id)
}

export const getByUsername = ({ username }) => {
    return users.getUsers("username", username)
}

export const saveUser = (userData) => {
    return users.saveUser(userData)
}

export const updateUser = ({ id, newData }) => {
    return users.updateUser(id, newData)
}

export const deleteUser = ({ id }) => {
    return users.deleteUser(id)
}