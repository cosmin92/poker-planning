import React from 'react'
import '../css/CardPicker.css';
import CardPickerInterface from '../repository/CardPickerInterface';
import CardPickerInterfaceImpl from '../repositoryImpl/CardPickerInterfaceImpl';

export default function CardPicker({currentPlayerId}:{currentPlayerId: number}) {

  const cardPickerInterface: CardPickerInterface = new CardPickerInterfaceImpl;

  return (
    <div className='cards'>
        <button className='btn-footer btn-footer-primary mr-5px' onClick={() =>cardPickerInterface.pickedCard(currentPlayerId, 0)}>0</button>
        <button className='btn-footer btn-footer-primary mr-5px' onClick={() =>cardPickerInterface.pickedCard(currentPlayerId, 1)}>1</button>
        <button className='btn-footer btn-footer-primary mr-5px' onClick={() =>cardPickerInterface.pickedCard(currentPlayerId, 2)}>2</button>
        <button className='btn-footer btn-footer-primary mr-5px' onClick={() =>cardPickerInterface.pickedCard(currentPlayerId, 3)}>3</button>
        <button className='btn-footer btn-footer-primary mr-5px' onClick={() =>cardPickerInterface.pickedCard(currentPlayerId, 5)}>5</button>
        <button className='btn-footer btn-footer-primary mr-5px' onClick={() =>cardPickerInterface.pickedCard(currentPlayerId, 8)}>8</button>
        <button className='btn-footer btn-footer-primary mr-5px' onClick={() =>cardPickerInterface.pickedCard(currentPlayerId, 13)}>13</button>
        <button className='btn-footer btn-footer-primary mr-5px' onClick={() =>cardPickerInterface.pickedCard(currentPlayerId, 21)}>21</button>
        <button className='btn-footer btn-footer-primary mr-5px' onClick={() =>cardPickerInterface.pickedCard(currentPlayerId, 34)}>34</button>
        <button className='btn-footer btn-footer-primary mr-5px' onClick={() =>cardPickerInterface.pickedCard(currentPlayerId, 55)}>55</button>
        <button className='btn-footer btn-footer-primary mr-5px' onClick={() =>cardPickerInterface.pickedCard(currentPlayerId, 89)}>89</button>
    </div>
  )
}