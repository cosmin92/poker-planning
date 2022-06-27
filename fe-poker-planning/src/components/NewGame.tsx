import React from 'react';
import { Input, Select } from 'antd';
import { Link } from 'react-router-dom';
import ButtonLoading from './ButtonLoading';
import '../css/NewGameStyle.css';

const NewGame = () => {

  return (
    <>
			<div className='home-items'>
				<h2>Choose a name for your game.</h2>

        <div className='input-item'>
          <Input placeholder="Game's name" />
        </div>

        <div className='select-item'>
          <Select defaultValue='Fibonacci voting system' style={{ width: 20 + 'vw' }} disabled />
        </div>

				<ButtonLoading />
        <Link to='/' style={{ padding: 20 }}>Back</Link>
			</div>
    </>
  );
};

export default NewGame;