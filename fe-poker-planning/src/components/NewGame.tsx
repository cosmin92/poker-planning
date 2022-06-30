import React from 'react';
import { Input, Select } from 'antd';
import { Link } from 'react-router-dom';
import ButtonLoading from './ButtonLoading';
import '../css/NewGameStyle.css';

interface Props {
  gameName?: string,
}

class NewGame extends React.Component<Props> {
  state = {
    gameName: '',
  };
 
  onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ gameName: e.currentTarget.value })
  };
  render() {
    return (
      <>
        <div className='home-items'>
          <h2>Choose a name for your game.</h2>

          <div className='input-item'>
            <Input
              placeholder="Game's name"
              value={this.state.gameName}
              onChange={this.onChange}
            />
          </div>

          <div className='select-item'>
            <Select defaultValue='Fibonacci voting system' style={{ width: 20 + 'vw' }} disabled />
          </div>

          <ButtonLoading gameName={this.state.gameName} />
          <Link to='/' style={{ padding: 20 }}>Back</Link>
        </div>
      </>
    );
  };
};

export default NewGame;