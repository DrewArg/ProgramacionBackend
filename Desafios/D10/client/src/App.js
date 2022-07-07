import './App.css';
import io from 'socket.io-client'
import { useEffect, useState } from 'react'

const socket = io.connect("http://localhost:8080")

function App() {
  const [message, setMessage] = useState("")
  const [messageReceived, setMessageReceived] = useState("")
  const sendMessage = () => {
    socket.emit("sendMessage", {
      message
    })
  }

  useEffect(() => {
    socket.on("receiveMessage", (data) => {
     setMessageReceived(data.message)
    })
  }, [socket])
  return (
    <div className="App">
      <input placeholder='Message...' onChange={(event) => {
        setMessage(event.target.value)
      }} />
      <button onClick={sendMessage}>Send Message</button>
      <h1>Message</h1>
      {messageReceived}
    </div>
  );
}

export default App;
