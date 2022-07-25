import { fork } from 'child_process'


export function calculateNoBlocking(req, res) {
    const queryNumber = req.body.queryNumber
    const child = fork('./src/utils/calculateWithFork.js')

    child.on('message', message => {
        if (message == 'ready') {
            child.send(queryNumber)
        } else {
            const string = JSON.stringify(message)
            res.send(string)
        }
    });
}