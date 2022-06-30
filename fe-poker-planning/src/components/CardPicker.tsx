import React from 'react'
import '../css/CardPicker.css';
import CardPickerInterface from '../repository/CardPickerInterface';
import CardPickerInterfaceImpl from '../repositoryImpl/CardPickerInterfaceImpl';

export default function CardPicker({currentPlayer}:{currentPlayer: number}) {

  const cardPickerInterface: CardPickerInterface = new CardPickerInterfaceImpl;

  return (
    <div className='cards'>
        <button className='btn-footer btn-footer-primary mr-5px' onClick={() =>cardPickerInterface.pickedCard(currentPlayer, 0)}>0</button>
        <button className='btn-footer btn-footer-primary mr-5px' onClick={() =>cardPickerInterface.pickedCard(currentPlayer, 1)}>1</button>
        <button className='btn-footer btn-footer-primary mr-5px' onClick={() =>cardPickerInterface.pickedCard(currentPlayer, 2)}>2</button>
        <button className='btn-footer btn-footer-primary mr-5px' onClick={() =>cardPickerInterface.pickedCard(currentPlayer, 3)}>3</button>
        <button className='btn-footer btn-footer-primary mr-5px' onClick={() =>cardPickerInterface.pickedCard(currentPlayer, 5)}>5</button>
        <button className='btn-footer btn-footer-primary mr-5px' onClick={() =>cardPickerInterface.pickedCard(currentPlayer, 8)}>8</button>
        <button className='btn-footer btn-footer-primary mr-5px' onClick={() =>cardPickerInterface.pickedCard(currentPlayer, 13)}>13</button>
        <button className='btn-footer btn-footer-primary mr-5px' onClick={() =>cardPickerInterface.pickedCard(currentPlayer, 21)}>21</button>
        <button className='btn-footer btn-footer-primary mr-5px' onClick={() =>cardPickerInterface.pickedCard(currentPlayer, 34)}>34</button>
        <button className='btn-footer btn-footer-primary mr-5px' onClick={() =>cardPickerInterface.pickedCard(currentPlayer, 55)}>55</button>
        <button className='btn-footer btn-footer-primary mr-5px' onClick={() =>cardPickerInterface.pickedCard(currentPlayer, 89)}>89</button>
    </div>
  )
}