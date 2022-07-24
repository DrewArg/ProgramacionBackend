import parseArgs from 'minimist'

const options = {
    alias: {
        p: 'port'
    },
    default: {
        port: 8080
    }
}

const args = process.argv.slice(2)

export const {port} = parseArgs(args,options)

