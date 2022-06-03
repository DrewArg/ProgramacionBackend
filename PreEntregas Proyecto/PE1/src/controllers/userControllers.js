const UserArchiveContainer = require('../containerS/UserArchiveContainer.js')
const users = new UserArchiveContainer('./src/db/users.txt')

const userController = {
    createUser: (req, res) => {
        if (req.method === "POST") {
            res.json(users.createUser(req.body))
        }
    },

    authorizeUser: (req, res) => {
        if (req.method === "GET") {
            res.json(users.authorizeUser(req.body))
        }
    }
}

module.exports = { userController };