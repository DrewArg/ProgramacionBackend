import dotenv from 'dotenv'

dotenv.config()

export const PORT = process.env.PORT
export const DB_NAME = process.env.DB_NAME
export const PERSISTANCE = process.env.PERSISTANCE