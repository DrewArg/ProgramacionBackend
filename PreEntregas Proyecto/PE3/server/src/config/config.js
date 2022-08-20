import MongoStore from 'connect-mongo'

const username = 'root'
const password = 'EYUU8mmwfh44bzks'

export const sessionConfig = {
    store: MongoStore.create({
        mongoUrl: `mongodb+srv://${username}:${password}@cluster.vcbuwku.mongodb.net/coderhouse?retryWrites=true&w=majority`,
        mongoOptions: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    }),

    secret: 'topSecret',
    resave: false,
    saveUninitialized: false,
    cookie:{
        maxAge: 10000
    }
}

export const mongoConfig = {
    mongodb:{
        url:`mongodb+srv://${username}:${password}@cluster0.vcbuwku.mongodb.net/?retryWrites=true&w=majority`,
        options:{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        authSource: 'admin',
        auth:{
            username: username,
            password: password
        }
        }
    }
}