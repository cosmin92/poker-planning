import React, { useEffect, useState } from 'react'
import CardPicker from './CardPicker'
import '../css/GameArea.css';
import '@splidejs/splide/dist/css/splide.min.css';
import PlayerCard from './PlayerCard';
import Table from './Table';
import { Player } from '../model/Player';
import LayoutNavbar from './LayoutNavbar';
import { Game } from '../model/Game';
import PlayerInterface from '../repository/PlayerInterface';
import PlayerInterfaceImpl from '../repositoryImpl/PlayerInterfaceImpl';
import { useParams } from 'react-router-dom';

interface GameProps {
    game: Game;
    currentPlayerId: number;
}

export default function GameArea<GameProps>() {
    let { gameName } = useParams<{ gameName: string }>();
    let { gameId } = useParams<{ gameId: string }>();
    let { playLink } = useParams<{ playLink: string }>();
    let { playerId } = useParams<{ playerId: string }>();

    const playersInterface: PlayerInterface = new PlayerInterfaceImpl();
    const [players, setPlayers] = useState<Player[]>([]);
    const [game, setGame] = useState<Game>();
    const buildGame: Game = { id: parseInt(gameId!), gameName: gameName, playLink: playLink!, adminId: parseInt(playerId!), players: players }
    
    useEffect(() => {
        setPlayers(playersInterface.getAllPlayers(Number(gameId)));
        setGame(buildGame);
    }, [players]);

    return (
        <>
            <LayoutNavbar />
            <div className='ContentArea'>
                {players.map((playerForPlayerCard: Player) => (
                    <PlayerCard key={playerForPlayerCard.id} player={playerForPlayerCard} />
                ))}
            </div>
            <div className='Board'>
                <Table game={game!} />
            </div>
            <div className='Footer'>
                <div className='text-nearFooter'>Choose your card 👇</div>
                <div><CardPicker currentPlayer={Number(playerId)} /> </div>
            </div>
        </>
    )
}