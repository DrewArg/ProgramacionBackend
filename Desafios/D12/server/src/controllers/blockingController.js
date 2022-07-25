
export function calculateBlocking(req, res) {
    const queryNumber = req.body.queryNumber
    const result = {}

    if (queryNumber) {
        for (let i = 0; i < queryNumber; i++) {
            if (result.i) {
                result.i += 1
            } else {
                result.i = i
            }
        }
    } else {
        const millions = 100000000

        let random = Math.floor(Math.random() * millions);


        console.log("end");

    }

    const string = JSON.stringify(result)
    res.send(string)

}


