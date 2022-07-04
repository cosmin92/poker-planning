import { Game } from "../types/Game";
import { Player } from "../types/Player";
import { Status } from "../types/Status";
import { getCards } from "./CardConfig";
import "../css/PlayerCard.css";
import React from "react";

interface PlayerCardProps {
  game: Game;
  player: Player;
}

export const PlayerCard: React.FC<PlayerCardProps> = ({ game, player }) => {
  return (
    <div className="player-info">
      <div className="player-card-header">
        <div className="player-card-header-text">{player.name}</div>
      </div>
      <div className="player-card-content">
        <h2 className="player-card-content-emoji">
          {getCardValue(player, game)}
        </h2>
      </div>
    </div>
  );
};

const getCardValue = (player: Player, game: Game) => {
  if (game.gameStatus !== Status.Finished) {
    return player.status === Status.Finished ? "👌" : "😴";
  }

  if (game.gameStatus === Status.Finished) {
    if (player.status === Status.Finished) {
      return getCardDisplayValue(game.gameType, player.value);
    }
    return "🤔";
  }
};

const getCardDisplayValue = (
  gameType: Game["gameType"],
  cardValue: number | undefined
): string | number | undefined => {
  return (
    getCards(gameType).find((card) => card.value === cardValue)?.displayValue ||
    cardValue
  );
};
