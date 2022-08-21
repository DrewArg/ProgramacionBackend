import MongoStore from 'connect-mongo'
import dotenv from 'dotenv'
dotenv.config()


const username = process.env.MONGO_USER
const password = process.env.MONGO_PASS


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