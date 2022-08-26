import { mongoConfig } from '../config/config.js'
import { default as mongodb, ObjectId } from 'mongodb'
import { winston } from '../controllers/loggerControllers.js'

const MongoClient = mongodb.MongoClient
const client = new MongoClient(mongoConfig.mongodb.url, mongoConfig.mongodb.client)
const dbName = "preEntrega3"
const mongoDb = client.db(dbName)

class MongoDbContainer {
    constructor(collectionName) {
        this._connect()
        this.createCollection(collectionName)
        this.collection = collectionName
    }

    async createCollection(collectionName) {
        try {
            await mongoDb.createCollection(collectionName)
        } catch (error) {
            winston.log('info', `Colección ya existente, no se realizaron cambios`)
        }
    }

    async _connect() {
        try {
            await client.connect()
        } catch (error) {
            winston.log('error', `Error en la conexión a la mongo ${error}`)
        }
    }

    async listById(id) {
        const objs = await this.listAll()
        const index = objs.findIndex((o) => o.id == id)
        if (index == -1) {
            winston.log('warn', `MongoDb container --> error buscando, no se encontró el id`)
        } else {
            winston.log('debug', `MongoDb container --> se encontró el id y se devuelve`)
            return objs[index]
        }
    }

    async listAll() {
        try {
            const objs = mongoDb.collection(this.collection).find()
            const objsArray = []

            await objs.forEach(prod => {
                objsArray.push(prod)
            })

            objsArray.forEach(o => {
                delete Object.assign(o, { ["id"]: o["_id"] })["_id"]
                o.id = "" + o.id + ""
            })

            return objsArray
        } catch (error) {
            winston.log('error', `MongoDbContainer --> ${error}`)

        }
    }

    async saveObject(object) {
        try {
            const obj = await mongoDb.collection(this.collection).insertOne(object)
            return obj.insertedId
        } catch (error) {
            winston.log('error', `MongoDbContainer --> ${error}`)
        }
    }

    async updateObject(object) {
        try {
            await mongoDb
                .collection(this.collection)
                .replaceOne({ _id: ObjectId(object.id) }, object)
        } catch (error) {
            winston.log('error', `MongoDbContainer --> ${error}`)
        }
    }

    async deleteById(id) {
        try {
            await mongoDb
                .collection(this.collection)
                .deleteOne({ _id: ObjectId(id) })
        } catch (error) {
            winston.log('error', `MongoDbContainer --> ${error}`)
        }
    }

    async deleteAll() {
        try {
            await mongoDb.collection(this.collection).deleteMany({})
        } catch (error) {
            winston.log('error', `MongoDbContainer --> ${error}`)
        }
    }

}

export default MongoDbContainer