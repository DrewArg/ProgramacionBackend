import jwt from 'jsonwebtoken'
import { SECRET } from '../config/config.js'

export function generateAuthToken(email) {
    const token = jwt.sign({ email }, SECRET, { expiresIn: 86400 })
    return token;
}

export function authorize(req, res, next) {
    const authHeader = req.headers["authorization"] || req.headers["Authorization"] || ''

    if (!authHeader) {
        throw new Error('UNAUNTHENTICATED')
    }

    const token = authHeader.split(' ')[1]

    if (!token) {
        throw new Error('UNAUNTHENTICATED')
    }

    try {
        const decoded = jwt.verify(token, SECRET)
        req.email = decoded
    } catch (error) {
        throw new Error('FORBIDDEN')
    }

    next()
}