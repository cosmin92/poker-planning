import { Game } from "../types/Game";
import { Player } from "../types/Player";
import "../css/GameArea.css";
import { CardPicker } from "./CardPicker";
import { Players } from "./Players";
import { Table } from "./Table";
import LayoutNavbar from "./LayoutNavbar";
import React from "react";

interface GameAreaProps {
  game: Game;
  players: Player[];
  currentPlayerId: string;
}
export const GameArea: React.FC<GameAreaProps> = ({
  game,
  players,
  currentPlayerId,
}) => {
  return (
    <>
    <LayoutNavbar game={game}/>
      <div className="ContentArea">
        <Players game={game} players={players} />
      </div>
      <div className="Board">
        <Table game={game} currentPlayerId={currentPlayerId} />
      </div>
      <div className="Footer">
        <div className="text-nearFooter">Choose your card 👇</div>
        <CardPicker
          game={game}
          players={players}
          currentPlayerId={currentPlayerId}
        />
      </div>
    </>
  );
};

export default GameArea;
