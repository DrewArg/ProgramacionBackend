import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import '../../style/style.css'
import { useState } from 'react'
import './Info.css'

function Info() {
    const [gotInfo, setGotInfo] = useState({})

    const getInfo = async () => {
        const url = `${process.env.REACT_APP_SERVER_URL}/info`

        await fetch(url, {
            method: "POST",
            headers: {
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Origin': `${process.env.REACT_APP_SERVER_URL}`,
                'Access-Control-Allow-Methods': 'POST,GET',
                'Content-Type': 'application/json'
            },
            credentials: 'include',
        }).then(async (r) => {
            if (r.status === 200) {
                const text = await r.text()
                const response = JSON.parse(text)
                setGotInfo(response)
            } else {
                console.log("no se pudo obtener la info");
            }
        })

    }
    return (
        <>
            <NavBar />
            <button onClick={getInfo}>Get Info</button>
            {gotInfo ?
                <table className='info'>
                    <tbody>

                        <tr>
                            <td>Args: </td>
                            <td>{gotInfo.args = "" ? gotInfo.args : "no se pasaron argumentos por consola"}</td>
                        </tr>
                        <tr>
                            <td>Platform: </td>
                            <td>{gotInfo.platform}</td>
                        </tr>
                        <tr>
                            <td>Node version: </td>
                            <td>{gotInfo.nodeVersion} </td>
                        </tr>
                        {gotInfo.memory ?
                            <>
                                <tr>
                                    <td>
                                        Memory usage:
                                    </td>
                                </tr>
                                <tr>
                                    <td>Array buffers: </td>
                                    <td>{gotInfo.memory.arrayBuffers}</td>
                                </tr>

                                <tr>
                                    <td>External: </td>
                                    <td>{gotInfo.memory.external}</td>
                                </tr>
                                <tr>
                                    <td>Heap total: </td>
                                    <td>{gotInfo.memory.heapTotal}</td>
                                </tr>
                                <tr>
                                    <td>Heap Used: </td>
                                    <td>{gotInfo.memory.heapUsed}</td>
                                </tr>
                                <tr>
                                    <td>Rss: </td>
                                    <td>{gotInfo.memory.rss}</td>
                                </tr>
                            </>
                            : ""}

                        <tr>
                            <td>Directory: </td>
                            <td>{gotInfo.directory}</td>
                        </tr>
                        <tr>
                            <td>Id: </td>
                            <td>{gotInfo.id}</td>
                        </tr>
                        <tr>
                            <td>Path: </td>
                            <td>{gotInfo.path}</td>
                        </tr>
                    </tbody>
                </table>
                : <div>No hay info actualmente</div>
            }
        </>
    )
}

export default Info