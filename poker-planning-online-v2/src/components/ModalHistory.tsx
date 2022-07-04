import { Button, Modal } from 'antd';
import React, { useState } from 'react';
//import HistoryTable from './HistoryTable';

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
        Voting History
      </Button>
      <Modal title="Voting History" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        {/* <HistoryTable/> */}
      </Modal>
    </>
  );
};

export default ModalSettings;