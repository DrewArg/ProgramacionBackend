import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SocketContext, socket } from './context/Socket';
import { useState } from 'react'
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';

function App() {
  const [loginPipActive, setLoginPipActive] = useState(false)
  const [registerPipActive, setRegisterPipActive] = useState(false)

  return (
    <BrowserRouter>
      <SocketContext.Provider value={socket}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home loginPipActive={loginPipActive} registerPipActive={registerPipActive} setLoginPipActive={setLoginPipActive} setRegisterPipActive={setRegisterPipActive} />} />
            <Route path="/shop" element={<Shop loginPipActive={loginPipActive} registerPipActive={registerPipActive} setLoginPipActive={setLoginPipActive} setRegisterPipActive={setRegisterPipActive} />} />
          </Routes>
        </div>
      </SocketContext.Provider>
    </BrowserRouter >


  );
}

export default App;
