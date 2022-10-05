import { createLogger, transports, format } from 'winston'


export const winston = createLogger({
    transports: [
        // new transports.File({
        //     filename: './src/logs/01-silly.log',
        //     level: 'silly',
        //     format: format.combine(format.timestamp(), format.json())
        // }),

        // new transports.File({
        //     filename: './src/logs/02-debug.log',
        //     level: 'debug',
        //     format: format.combine(format.timestamp(), format.json())
        // }),

        // new transports.File({
        //     filename: './src/logs/03-verbose.log',
        //     level: 'verbose',
        //     format: format.combine(format.timestamp(), format.json())
        // }),

        // new transports.File({
        //     filename: './src/logs/04-info.log',
        //     level: 'info',
        //     format: format.combine(format.timestamp(), format.json())
        // }),

        // new transports.File({
        //     filename: './src/logs/05-warn.log',
        //     level: 'warn',
        //     format: format.combine(format.timestamp(), format.json())
        // }),

        new transports.File({
            filename: './src/logs/06-error.log',
            level: 'error',
            format: format.combine(format.timestamp(), format.json())
        })
    ]
})
