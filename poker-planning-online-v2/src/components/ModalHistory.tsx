import { Button, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import { getHistory } from '../service/Games';
import { Game } from '../types/Game';
import HistoryTable from './HistoryTable';

interface ModalHistoryProps {
  game: Game;
}

const ModalHistory: React.FC<ModalHistoryProps> = ({game}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [history, setHistory] = useState<Game[] | undefined>(undefined);
  useEffect(() => {
    async function fetchData() {
      let historyGameList = await getHistory();
      if (historyGameList) {
        setHistory(historyGameList);
      }
    }
    fetchData();
  }, [])

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
        {<HistoryTable history={history!} />}
      </Modal>
    </>
  );
};

export default ModalHistory;