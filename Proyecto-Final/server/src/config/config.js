import MongoStore from 'connect-mongo'
import dotenv from 'dotenv'


dotenv.config()

export const PORT = process.env.PORT
export const DB_NAME = process.env.DB_NAME
export const PERSISTANCE = process.env.PERSISTANCE

const username = process.env.DB_USER
const password = process.env.DB_SHH


export const sessionConfig = {
    store: MongoStore.create({
        mongoUrl: `mongodb+srv://${username}:${password}@cluster.vcbuwku.mongodb.net/preEntrega3?retryWrites=true&w=majority`,
        mongoOptions: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    }),

    secret: process.env.MONGO_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000000
    }
}

export const mongoConfig = {
    mongodb: {
        url: `mongodb+srv://${username}:${password}@cluster0.vcbuwku.mongodb.net/?retryWrites=true&w=majority`,
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            authSource: 'admin',
            auth: {
                username: username,
                password: password
            }
        }
    }
}