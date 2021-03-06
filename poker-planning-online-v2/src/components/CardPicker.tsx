import React, { useState } from 'react'
import '../css/CardPicker.css';
import { updatePlayerValue } from '../service/Players';
import { Game } from '../types/Game';
import { Player } from '../types/Player';
import { Status } from '../types/Status';
import { CardConfig, getCards } from './CardConfig';

interface CardPickerProps {
    game: Game;
    players: Player[];
    currentPlayerId: string;
  }

export const CardPicker: React.FC<CardPickerProps>=({game, players, currentPlayerId}) => {

  const [active, setActive] = useState(false);

  const playPlayer = (gameId: string, playerId: string, card: number) => {

      document.querySelector('button.btn-footer-primary-active')?.classList.remove('btn-footer-primary-active');
      document.getElementById(card.toString())?.classList.add('btn-footer-primary-active');

    if (game.gameStatus !== Status.Finished) {
      updatePlayerValue(gameId, playerId, card);
    }
  };

  const cards = getCards(game.gameType);

  return (

    <div className='cards'>
      {cards.map((card: CardConfig) =>(
         <button id={card.value.toString()} key={card.value} className='btn-footer btn-footer-primary mr-5px' onClick={() =>playPlayer(game.id, currentPlayerId, card.value)}>
            <div>{card.displayValue}</div>
        </button>
      ))}
    </div>

    // <div className='cards'>
    //     <button className='btn-footer btn-footer-primary mr-5px' onClick={() =>playPlayer(game.id, currentPlayerId, 0)}>0</button>
    //     <button className='btn-footer btn-footer-primary mr-5px' onClick={() =>playPlayer(game.id, currentPlayerId, 1)}>1</button>
    //     <button className='btn-footer btn-footer-primary mr-5px' onClick={() =>playPlayer(game.id, currentPlayerId, 2)}>2</button>
    //     <button className='btn-footer btn-footer-primary mr-5px' onClick={() =>playPlayer(game.id, currentPlayerId, 3)}>3</button>
    //     <button className='btn-footer btn-footer-primary mr-5px' onClick={() =>playPlayer(game.id, currentPlayerId, 5)}>5</button>
    //     <button className='btn-footer btn-footer-primary mr-5px' onClick={() =>playPlayer(game.id, currentPlayerId, 8)}>8</button>
    //     <button className='btn-footer btn-footer-primary mr-5px' onClick={() =>playPlayer(game.id, currentPlayerId, 13)}>13</button>
    //     <button className='btn-footer btn-footer-primary mr-5px' onClick={() =>playPlayer(game.id, currentPlayerId, 21)}>21</button>
    //     <button className='btn-footer btn-footer-primary mr-5px' onClick={() =>playPlayer(game.id, currentPlayerId, 34)}>34</button>
    //     <button className='btn-footer btn-footer-primary mr-5px' onClick={() =>playPlayer(game.id, currentPlayerId, 55)}>55</button>
    //     <button className='btn-footer btn-footer-primary mr-5px' onClick={() =>playPlayer(game.id, currentPlayerId, 89)}>89</button>
    // </div>
  )
}