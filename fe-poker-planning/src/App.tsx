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
  //-----ATTENZIONE-------//
  //Le righe seguenti (fino al return) sono state inserite per una prova e per dei test.
  //Questa parte dovrà essere implementata nella parte riguardante la creazione del game ed eliminata da qui
  //insieme alla chiamata <Route path='/gamearea' element={<GameArea game={game!} />} />
  const playerTest3: Player = { id: 1, username: "adrian", role: "admin", vote: 0, gameId: 1 };
  const playersTest: Player[] = [];
  playersTest.push(playerTest3);
  const gameTest: Game = { id: 1, gameName: "test", players:playersTest}
  const [game, setGame] = useState<Game>(gameTest);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/starting' element={<NewGame />} />
          <Route path='/gamearea' element={<GameArea game={game!} currentPlayerId={game.players[0].id} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
