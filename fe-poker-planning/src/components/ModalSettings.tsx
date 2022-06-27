import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import GameSettingsForm from './GameSettingsForm';

const ModalSettings: React.FC = () => {
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
        <GameSettingsForm/>
      </Modal>
    </>
  );
};

export default ModalSettings;