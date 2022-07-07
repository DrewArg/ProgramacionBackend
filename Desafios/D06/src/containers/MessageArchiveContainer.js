const fs = require('fs')
const Message = require('../db/Message.js')

class MessageArchiveContainer {
    constructor(path) {
        this.path = path;
        this.messages = [];
    }

    _saveFile() {
        const textFile = JSON.stringify(this.messages, null, 2);
        return fs.promises.writeFile(this.path, textFile);
    }

    _readFile() {
        return fs.promises.readFile(this.path, 'utf-8')
            .then((text) => {
                const messagesArray = JSON.parse(text)
                this.messages = messagesArray
            })
    }

    async save(messageData) {
        const date = new Date();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const year = date.getFullYear();
        const hour = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const builtDate = day + "/" + month + "/" + year + " " + hour + ":" + minutes + ":" + seconds;

        const message = new Message(
            messageData.userEmail,
            builtDate,
            messageData.msgContent
        )

        await this._readFile();
        this.messages.push(message);
        await this._saveFile();
        return message;
    }
    async getAll() {
        await this._readFile();
        return [...this.messages]
    }
}

module.exports = MessageArchiveContainer;