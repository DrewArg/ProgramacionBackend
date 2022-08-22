import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import ProductListContainer from '../../container/ProductListContainer/ProductListContainer.jsx'
import PipContainer from '../../container/PipContainer/PipContainer'
import { SocketContext } from '../../context/Socket'
import { useContext, useState, useEffect } from 'react'




const Shop = ({  setLoginPipActive, loginPipActive, setRegisterPipActive, registerPipActive }) => {

  const reactSocket = useContext(SocketContext)
  const [request, setRequest] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    if (!request) {
      reactSocket.emit("isLoggedIn")
      setRequest(true)
    }

    reactSocket.on("isLogged", (isLogged) => {
      if (isLogged) {
        setLoggedIn(true)
      }
    })
  }, [reactSocket, request])
    return (
        <>
            <Navbar loggedIn={loggedIn} setLoginPipActive={setLoginPipActive} setRegisterPipActive={setRegisterPipActive} />
            <PipContainer setLoginPipActive={setLoginPipActive} loginPipActive={loginPipActive} setRegisterPipActive={setRegisterPipActive} registerPipActive={registerPipActive} />
            <ProductListContainer />
        </>
    )
}

export default Shop