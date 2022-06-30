import { Button } from 'antd';
import React, { useState } from 'react';

interface Props {
  gameName?: string,
}

const ButtonLoading: React.FC<Props> = ({ gameName }): JSX.Element => {
  const [loadings, setLoadings] = useState<boolean[]>([]);

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
    }, 2000);

    console.log(gameName);
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