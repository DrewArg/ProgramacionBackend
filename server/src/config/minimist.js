import parseArgs from 'minimist'

const options = {
    alias: {
        p: 'port',
        m: 'mode'
    },
    default: {
        port: 8080
    }
}

const args = process.argv.slice(2)

export const { port, mode } = parseArgs(args, options)