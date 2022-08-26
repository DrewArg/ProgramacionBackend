import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import '../../style/style.css'
import { useState } from 'react'
import './RandomNumbers.css'

function RandomNumbers() {

    const [queryNumber, setQueryNumber] = useState(0)
    const [result, setResult] = useState({})
    const [notResult, setNotResult] = useState({})
    const [pKeys, setPkeys] = useState([])
    const [pValues, setPvalues] = useState([])
    const [pKeysNot, setPkeysNot] = useState([])
    const [pValuesNot, setPvaluesNot] = useState([])

    const parseArray = (array) => {
        const keys = Object.keys(array)
        setPkeys(keys)
        const values = Object.values(array)
        setPvalues(values)

    }

    const parseArrayNot = (array) => {
        const keys = Object.keys(array)
        setPkeysNot(keys)
        const values = Object.values(array)
        setPvaluesNot(values)

    }

    const getNotBlocking = async () => {
        const url = 'https://backend-desafio15.herokuapp.com/api/notBlockinRandom'

        const number = {
            queryNumber: queryNumber
        }

        await fetch(url, {
            method: "POST",
            body: JSON.stringify(number),
            headers: {
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Origin': 'https://boisterous-pasca-17e307.netlify.app',
                'Access-Control-Allow-Methods': 'POST,GET',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
        }).then(async (r) => {
            if (r.status === 200) {
                const text = await r.text()
                const response = JSON.parse(text)
                setNotResult(response)
            } else {
                console.log("no se pudo el resultado no bloqueante");
            }
        })
    }


    const getBlocking = async () => {
        const url = 'https://backend-desafio15.herokuapp.com/api/blockingRandom'

        const number = {
            queryNumber: queryNumber
        }

        await fetch(url, {
            method: "POST",
            body: JSON.stringify(number),
            headers: {
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Origin': 'https://boisterous-pasca-17e307.netlify.app',
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
            <div className='randomNumbers'>

                <label className="formLabel">Ingresa el número máximo</label>
                <input className='formInput' type="number" placeholder="número máximo" id="maxNumber" name="maxNumber" value={queryNumber} onInput={e => { setQueryNumber(e.target.value) }} />
                <div className='columnas'>
                    <div className='uno'>



                        <button className='buttonOk' onClick={getBlocking}>Obtener Bloqueante</button>
                        {result ?
                            <>

                                <button className='buttonOk' onClick={() => { parseArray(result) }}>Ver la lista</button>
                                {
                                    pKeys.map((key, i) => {
                                        return <div key={key}>
                                            <div >{key}: {pValues[i]}</div>
                                        </div>


                                    })
                                }
                            </>
                            : ""}
                    </div>
                    <div className='dos'>
                        <button className='buttonOk' onClick={getNotBlocking}>Obtener No Bloqueante</button>
                        {result ?
                            <>

                                <button className='buttonOk' onClick={() => { parseArrayNot(notResult) }}>Ver la lista</button>
                                {
                                    pKeysNot.map((key, i) => {
                                        return <div key={key}>
                                            <div >{key}: {pValuesNot[i]}</div>
                                        </div>


                                    })
                                }
                            </>
                            : ""}
                    </div>
                </div>
            </div>
        </>
    )
}

export default RandomNumbers