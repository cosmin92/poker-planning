import React from 'react'
import CardPicker from './CardPicker'
import '../css/GameArea.css';
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/splide/dist/css/splide.min.css';
import Player from './PlayerCard';
import Table from './Table';

export default function GameArea() {
    return (
        <>
            <div className='ContentArea'>
                <Player />
            </div>
            <div className='Board'>
                <Table />
            </div>
            <div className='Footer'>
                <div className='text-nearFooter'>Choose your card 👇</div>
                <div><CardPicker /> </div>
            </div>
        </>
    )
}