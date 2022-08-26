import MongoStore from 'connect-mongo'
import dotenv from 'dotenv'
dotenv.config()


export const adminAccount = process.env.ADMIN
export const adminPass = process.env.PASS
export const adminHash = process.env.HASHPASS

export const adminEthereal = process.env.ADMIN_EMAIL
export const adminEtherealPass = process.env.ADMIN_PASS

export const serverUrl = process.env.SERVER_URL
export const clientUrl = process.env.CLIENT_URL

export const twilioAccountSid = process.env.TWILIO_ID
export const twilioAuthToken = process.env.TWILIO_TOKEN
export const twilioSmsPhoneNumber = process.env.TWILIO_SMS_NUMBER
export const twilioWhatsapp = process.env.TWILIO_WHATSAPP
export const twilioWhatsappAdmin = process.env.TWILIO_WHATSAPP_ADMIN

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




