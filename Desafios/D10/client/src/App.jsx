import './App.css';
import React from 'react';
import { SocketContext, socket } from './context/Socket';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import Products from './pages/Products/Products'
import Messages from './pages/Messages/Messages'

function App() {
  return (
    <BrowserRouter>
      <SocketContext.Provider value={socket}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="messages" element={<Messages />} />
          </Routes>
        </div>
      </SocketContext.Provider>
    </BrowserRouter>
  );
}

export default App;
