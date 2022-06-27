import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import StartingPage from './components/NewGame';
import GameArea from './components/GameArea';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/starting' element={<StartingPage />} />
          <Route path='/gamearea' element={<GameArea />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
