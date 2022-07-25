import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import '../../style/style.css'
import { useState } from 'react'

function RandomNumbers() {

    const [queryNumber, setQueryNumber] = useState()
    const [result, setResult] = useState()

    const getBlocking = async () => {
        const url = 'http://localhost:8080/api/blockingRandom'

        await fetch(url, {
            method: "POST",
            body: JSON.stringify(queryNumber),
            headers: {
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Origin': 'http://localhost:3000',
                'Access-Control-Allow-Methods': 'POST,GET',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
        }).then(async (r) => {
            if (r.status === 200) {
                const text = await r.text()
                const response = JSON.parse(text)
                setResult(response)
            } else {
                console.log("no se pudo el resultado bloqueante");
            }
        })

    }

    return (
        <>
            <NavBar />
            <button onClick={getBlocking}>Get blocking</button>
            {console.log(result)}
        </>
    )
}

export default RandomNumbers