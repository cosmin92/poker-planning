import { Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { getHistory } from '../service/Games';
import { Game } from '../types/Game';

interface HistoryTableProps{
  history: Game[],
}

const columns = [
  {
    title: 'Game name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Average',
    dataIndex: 'average',
    key: 'average'
  }
];

const HistoryTable: React.FC<HistoryTableProps> = ({history}) => {
  

  const dataSource: Game[] = []
  history?.forEach(function (value) {
    dataSource.push(value);
  })

  return <Table columns={columns} dataSource={dataSource} />;
}

export default HistoryTable;