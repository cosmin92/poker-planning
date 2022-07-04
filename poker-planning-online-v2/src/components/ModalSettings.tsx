import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import { Game } from '../types/Game';
import GameSettingsForm from './GameSettingsForm';

interface ModalSettingsProps {
  game: Game;
}

const ModalSettings: React.FC<ModalSettingsProps> = ({game}) => {
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

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Game Settings
      </Button>
      <Modal title="Game Settings" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <GameSettingsForm game={game}/>
      </Modal>
    </>
  );
};

export default ModalSettings;