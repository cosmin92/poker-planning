import React, { useEffect, useState } from 'react'
import '../css/PlayerCard.css';
import '@splidejs/splide/dist/css/splide.min.css';
import { Player } from '../model/Player';

export default function PlayerCard({ player }: { player: Player }) {
  return (
    <div className='player-info'>
      <div className='player-card-header'>
          {player.username + " " + player.role}
      </div>
      <div className='player-card-content'>
        <h2 className='player-card-content-emoji'>🤔</h2>
      </div>
    </div>
  )
}