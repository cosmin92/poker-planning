import React from 'react'
import '../css/CardPicker.css';

export default function CardPicker() {
  return (
    <div className='cards'>
        <button className='btn-footer btn-footer-primary mr-5px'>0</button>
        <button className='btn-footer btn-footer-primary mr-5px'>1</button>
        <button className='btn-footer btn-footer-primary mr-5px'>2</button>
        <button className='btn-footer btn-footer-primary mr-5px'>3</button>
        <button className='btn-footer btn-footer-primary mr-5px'>5</button>
        <button className='btn-footer btn-footer-primary mr-5px'>8</button>
        <button className='btn-footer btn-footer-primary mr-5px'>13</button>
        <button className='btn-footer btn-footer-primary mr-5px'>21</button>
        <button className='btn-footer btn-footer-primary mr-5px'>34</button>
        <button className='btn-footer btn-footer-primary mr-5px'>55</button>
        <button className='btn-footer btn-footer-primary mr-5px'>89</button>
    </div>
  )
}