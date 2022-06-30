import React, { useEffect, useState } from 'react'
import '../css/PlayerCard.css';
import '@splidejs/splide/dist/css/splide.min.css';
import { Player } from '../model/Player';

export default function PlayerCard({ player }: { player: Player }) {
  return (
    <div className='player-info'>
      <div className='player-card-header'>
        <div className='text-margin'>
          {player.username} <br /> {player.role}
        </div>
      </div>
      <div className='player-card-content'>
        <h2 className='player-card-content-emoji'>
          🤔
        </h2>
      </div>
    </div>
  )
}