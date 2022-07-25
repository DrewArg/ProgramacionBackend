import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import '../../style/style.css'
import { useState } from 'react'

function RandomNumbers() {

    const [queryNumber, setQueryNumber] = useState(0)
    const [result, setResult] = useState({})

    const getBlocking = async () => {
        const url = 'http://localhost:8080/api/blockingRandom'

        console.log(queryNumber);

        await fetch(url, {
            method: "POST",
            body: queryNumber.toString(),
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
            <label className="formLabel">Ingresa el número máximo</label>
            <input className='formInput' type="number" placeholder="número máximo" id="maxNumber" name="maxNumber" value={queryNumber} onInput={e => { setQueryNumber(e.target.value) }} />
            {result ?
                <>
                    {/* {result.map(k=>{
                       return <div>{k}</div>
                    })} */}
                    {console.log(result)}
                </>
                : ""}
        </>
    )
}

export default RandomNumbers