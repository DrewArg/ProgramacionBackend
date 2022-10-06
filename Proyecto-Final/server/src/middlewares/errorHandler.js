export function errorHandler(err, req, res, next) {

    const map = new Map()
    map.set('MISSING_REQUIRED_PARAM', 400)
    map.set('UNAUNTHENTICATED', 401)
    map.set('FORBIDDEN', 403)
    map.set('NOT_FOUND', 404)
    map.set('NOT_FOUND', 404)
    map.set('METHOD_NOT_ALLOWED', 405)
    map.set('UNSUPPORTED_MEDIA_TYPE', 415)
    map.set('TEAPOT', 418)
    map.set('SERVER_ERROR', 500)
    map.set('NOT_IMPLEMENTED', 501)
    map.set('NETWORK_AUTHENTICATION_REQUIRED', 511)


    let result = map.get(err.message)

    if (result) {
        res.status(result)
        res.json(err.message)
    } else {
        res.status(500)
        res.json(err)
    }

}