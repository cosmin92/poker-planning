import React, { useEffect, useState } from 'react'
import '../css/PlayerCard.css';
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css';

export default function PlayerCard() {

  const [players, setPlayers] = useState<any>([]);
/*
  useEffect(() => {
    getPlayers();
  });

  const getPlayers = async () => {
    const playerData = getAllPlayers();
    setPlayers(playerData);
  }*/

  return (
    <div className='player-wrapper'>
      <Splide options={{
        perPage: 5,
        arrow: false,
        pagination: false,
        drag: 'free',
        gap: '5rem'
      }}>
        {players.map((player: any) => {
          return (
            <SplideSlide>
              <div className='player-info'>
                <div className='player-text'>
                  <p>{player.name + " " + player.surname}</p>
                </div>
              </div>
            </SplideSlide>
          );
        })};
      </Splide>
    </div>
  )
}