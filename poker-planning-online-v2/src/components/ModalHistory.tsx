import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import { Game } from '../types/Game';
import HistoryTable from './HistoryTable';

interface ModalHistoryProps {
  game: Game;
}

const ModalHistory: React.FC<ModalHistoryProps> = ({game}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleUpdate = () =>{

  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Voting History
      </Button>
      <Modal title="Voting History" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        {<HistoryTable/>}
      </Modal>
    </>
  );
};

export default ModalHistory;