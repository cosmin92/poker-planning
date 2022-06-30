import { Button } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import createGame from '../repositoryImpl/GameCreationInterfaceImpl';
import { GameCreation } from '../model/GameCreation';

interface Props {
  gameName?: string,
}

const ButtonLoading: React.FC<Props> = ({ gameName }): JSX.Element => {
  const [loadings, setLoadings] = useState<boolean[]>([]);

  let navigate = useNavigate();

  const enterLoading = (index: number) => {
    setLoadings(prevLoadings => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });

    setTimeout(() => {
      setLoadings(prevLoadings => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
      // call to API interface
      var game: GameCreation = {
        gameName: '',
        playLink: '',
        adminId: 0,
      };
      game.gameName = gameName;
      game.playLink = '' + game.adminId + gameName;
      game.adminId = 0;
      createGame(game);
      console.log(gameName);
      navigate('/' + game.playLink);
    }, 2000);

  };

  return (
    <>
        <Button type='primary' shape='round' size='large' loading={loadings[0]} onClick={() => enterLoading(0)}>
          New game
        </Button>
        
    </>
  );
};

export default ButtonLoading;