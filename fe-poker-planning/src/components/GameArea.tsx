import React, { useEffect, useState } from 'react'
import CardPicker from './CardPicker'
import '../css/GameArea.css';
import '@splidejs/splide/dist/css/splide.min.css';
import PlayerCard from './PlayerCard';
import Table from './Table';
import { Player } from '../model/Player';
import LayoutNavbar  from './LayoutNavbar';
import { Game } from '../model/Game';
import PlayerInterface from '../repository/PlayerInterface';
import PlayerInterfaceImpl from '../repositoryImpl/PlayerInterfaceImpl';

interface GameProps{
    game: Game;
    currentPlayerId: number;
}

export default function GameArea<GameProps>({game, currentPlayerId}: {game: Game, currentPlayerId: number}) {

    const playersInterface: PlayerInterface = new PlayerInterfaceImpl();

    const [players, setPlayers] = useState<Player[]>([]);
    
      useEffect(() => {
        setPlayers(playersInterface.getAllPlayers(game.id));
      }, []);

    return (
        <>
            <LayoutNavbar/>
            <div className='ContentArea'>
                {players.map((playerForPlayerCard: Player) => (
                    <PlayerCard key={playerForPlayerCard.id} player={playerForPlayerCard} />
                ))}
            </div>
            <div className='Board'>
                <Table game={game}/>
            </div>
            <div className='Footer'>
                <div className='text-nearFooter'>Choose your card 👇</div>
                <div><CardPicker currentPlayer={currentPlayerId} /> </div>
            </div>
        </>
    )
}