import { fork } from 'child_process'


export function calculateNoBlocking(req, res) {
    const { url } = req
    const queryNumber = req.body.queryNumber

    if (url == '/api/notBlockinRandom') {
        const calculateFn = fork('../utils/calculateWithFork.js')

        calculateFn.on('message', msg => {
            if (msg === 'ready') {
                computo.send('calcular!')
            }
        })
    }

    const string = JSON.stringify(result)
    res.send(string)
}