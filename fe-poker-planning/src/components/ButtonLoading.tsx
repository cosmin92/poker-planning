import { PoweroffOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import React, { useState } from 'react';

const ButtonLoading: React.FC = () => {
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
    }, 6000);
  };

  return (
    <>
        <Button type='primary' shape='round' loading={loadings[0]} onClick={() => enterLoading(0)}>
          New game
        </Button>
        
    </>
  );
};

export default ButtonLoading;