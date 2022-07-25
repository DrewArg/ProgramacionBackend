const calculate = (queryNumber) => {
    let sum = 0
    for (let i = 0; i < 6e9; i++) {
        sum += i
    }
    return sum
}

process.on('calculatge', queryNumber => {
    const result = calculate(queryNumber)
    process.send(result)
})

process.send('ready')

