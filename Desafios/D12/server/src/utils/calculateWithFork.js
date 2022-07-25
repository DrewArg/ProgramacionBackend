const calculate = (queryNumber) => {
    const result = {}
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
        const millions = 50000000;
        for (let i = 0; i < millions; i++) {
            const rand = Math.floor(Math.random() * millions);
            if (result[rand]) {
                result[rand] = result[rand] + 1;
            } else {
                result[rand] = 1;
            }
        }
    }

    return result
}

process.on('calculate', msg => {
    const result = calculate(queryNumber)
    process.send(result)
})

process.send('done')


