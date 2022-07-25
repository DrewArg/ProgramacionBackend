export function calculateBlocking(req, res) {
    console.log(req.body);
    const queryNumber = req.body.queryNumber;
    const result = {};

    if (queryNumber > 0) {
        for (let i = 0; i < queryNumber; i++) {
            const rand = Math.floor(Math.random() * queryNumber);
            if (result[rand]) {
                result[rand] = result[rand] + 1;
            } else {
                result[rand] = 1;
            }
        }
    } else {
        const millions = 10000000;
        for (let i = 0; i < millions; i++) {
            const rand = Math.floor(Math.random() * millions);
            if (result[rand]) {
                result[rand] = result[rand] + 1;
            } else {
                result[rand] = 1;
            }
        }
    }

    const string = JSON.stringify(result);
    res.send(string);
}
