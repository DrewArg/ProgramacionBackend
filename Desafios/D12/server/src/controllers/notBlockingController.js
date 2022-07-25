import { fork } from 'child_process'


export function calculateNoBlocking(req, res) {
    const queryNumber = req.body.queryNumber
    console.log("query: " + queryNumber);
    let result = {};

    if (queryNumber != 0) {
        const calculateFn = fork('../server/src/utils/calculateWithFork.js')

        calculateFn.on('message', msg => {
            if (msg === 'done') {
                result = msg
            } else {
                calculateFn.send('calculate')
            }
        })
    }

    const string = JSON.stringify(result)
    console.log(result);
    res.send(string)
}