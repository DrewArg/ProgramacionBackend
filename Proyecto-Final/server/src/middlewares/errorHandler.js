export function errorHandler(err, req, res, next) {
    switch (err) {
        case 'NOT_FOUND':
            res.status(404)
            break
        case 'MISSING_REQUIRED_PARAM':
            res.status(400)
            break
        case 'UNAUNTHENTICATED':
            res.status(401)
            break
        case 'FORBIDDEN':
            res.status(403)
            break
        case 'NOT_FOUND':
            res.status(404)
            break
        case 'METHOD_NOT_ALLOWED':
            res.status(405)
            break
        case 'UNSUPPORTED_MEDIA_TYPE':
            res.status(415)
            break
        case 'TEAPOT':
            res.status(418)
            break
        case 'TEAPOT':
            res.status(418)
            break
        case 'TEAPOT':
            res.status(418)
            break
        case 'NOT_IMPLEMENTED':
            res.status(501)
            break
        case 'NETWORK_AUTHENTICATION_REQUIRED':
            res.status(511)
            break
        default:
            res.status(500)
    }
    res.json(err)
}