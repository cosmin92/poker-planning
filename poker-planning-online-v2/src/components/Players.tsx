import React from "react";
import { Game } from "../types/Game";
import { Player } from "../types/Player";
import { PlayerCard } from "./PlayerCard";

interface PlayersProps {
    game: Game;
    players: Player[];
  }
  export const Players: React.FC<PlayersProps> = ({ game, players }) => {
    return (
        <>
          {players.map((player: Player) => (
            <PlayerCard key={player.id} game={game} player={player} />
          ))}
        </>
    );
  };