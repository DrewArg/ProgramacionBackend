import './App.css';
import React from 'react';
import { SocketContext, socket } from './context/Socket';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductListContainer from './container/ProductListContainer/ProductListContainer'

function App() {
  // const [message, setMessage] = useState("")
  // const [messageReceived, setMessageReceived] = useState("")
  // const sendMessage = () => {
  //   socket.emit("sendMessage", {
  //     message
  //   })
  // }

  // useEffect(() => {
  //   socket.on("receiveMessage", (data) => {
  //    setMessageReceived(data.message)
  //   })
  // }, [socket])


  return (
    <BrowserRouter>
      <SocketContext.Provider value={socket}>
        <div className="App">
          <Routes>
            <Route path="/" element={<ProductListContainer />} />
          </Routes>
        </div>
      </SocketContext.Provider>
    </BrowserRouter>
  );
}

export default App;
