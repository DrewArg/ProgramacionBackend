import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SocketContext, socket } from './context/Socket';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <SocketContext.Provider value={socket}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </SocketContext.Provider>
    </BrowserRouter >


  );
}

export default App;
