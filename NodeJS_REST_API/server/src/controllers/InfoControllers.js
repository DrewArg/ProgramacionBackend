export const infoController = (req, res) => {
    const processArgs = process.execArgv
    const processPlatform = process.platform
    const nodeVersion = process.version
    const memoryUsage = process.memoryUsage()
    const currDirectory = process.cwd()
    const processId = process.pid
    const processPath = process.execPath

    const response = {
        args: processArgs,
        platform: processPlatform,
        nodeVersion: nodeVersion,
        memory: memoryUsage,
        directory: currDirectory,
        id: processId,
        path: processPath
    }

    res.send(response)
}