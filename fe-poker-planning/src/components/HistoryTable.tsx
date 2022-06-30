import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import React from 'react';
import GameHistoryInterface from '../repository/GameHistoryInterface';
import GameHistoryInterfaceImpl from '../repositoryImpl/GameHistoryInterfaceImpl';

interface DataType {
  name: string;
  result: number;
  average: number;
  mostVotedCard: number,
  time: Date;
  totalPlayersVoted: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Issue',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Result',
    dataIndex: 'result',
    key: 'result'
  },
  {
    title: 'Average',
    dataIndex: 'average',
    key: 'average'
  },

  {
    title: 'Most Voted Card',
    key: 'mostVotedCard',
    dataIndex: 'mostVotedCard'
  },

  {
    title: 'Time',
    key: 'time',
    dataIndex: 'time'
  },

  {
    title: 'Players Voted/Total',
    key: 'totalPlayersVoted',
    dataIndex: 'totalPlayersVoted'
  },
  
];

const data: DataType[] = [
  {
    name: '1',
    result: 5,
    average: 6,
    mostVotedCard: 3,
    time: new Date(),
    totalPlayersVoted:5
  },
];

const gameHistoryInterface: GameHistoryInterface = new GameHistoryInterfaceImpl;

function HistoryTable() {
  let list = gameHistoryInterface.getVotingHistory(4);
  return <Table columns={columns} dataSource={list} />;
}

export default HistoryTable;