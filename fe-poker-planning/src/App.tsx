import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import NewGame from './components/NewGame';
import GameArea from './components/GameArea';
import { Game } from './model/Game';
import { Player } from './model/Player';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/starting' element={<NewGame />} />
          <Route path='/gamearea/:gameName/:gameId/:playLink/:playerId' element={<GameArea />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
