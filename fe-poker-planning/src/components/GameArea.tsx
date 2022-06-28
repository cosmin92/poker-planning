import React, { useEffect, useState } from 'react'
import CardPicker from './CardPicker'
import '../css/GameArea.css';
import '@splidejs/splide/dist/css/splide.min.css';
import PlayerCard from './PlayerCard';
import Table from './Table';
import { Player } from '../model/Player';
import LayoutNavbar  from './LayoutNavbar';
import { Game } from '../model/Game';

const playerTest: Player = { id: 1, username: "adrian", role: "admin", vote: 0, gameId: 1 };
const playerTest2: Player = { id: 2, username: "adrian", role: "admin", vote: 0, gameId: 1 };
const playerTest3: Player = { id: 3, username: "adrian", role: "admin", vote: 0, gameId: 1 };
const playersTest: Player[] = [];
playersTest.push(playerTest, playerTest2, playerTest3);

interface GameProps{
    game: Game;
}

export default function GameArea<GameProps>({game}: {game: Game}) {


    const [players, setPlayers] = useState<Player[]>([]);
    
      useEffect(() => {
        setPlayers(playersTest);
      });

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
                <div><CardPicker currentPlayerId={2} /> </div>
            </div>
        </>
    )
}