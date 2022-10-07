import jwt from 'jsonwebtoken'

const PRIVATE_KEY = 'privateKey'

export function generateAuthToken(username) {
    const token = jwt.sign({ username }, PRIVATE_KEY, { expiresIn: "1 day" })
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
        const original = jwt.verify(token, PRIVATE_KEY)
        req.isAuthorized = original
    } catch (error) {
        throw new Error('FORBIDDEN')
    }

    next()
}