import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import React from 'react';

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




/*function HistoryTable() {
  const votingHistory = gamesService.getVotingHistory();
  return <Table columns={columns} dataSource={votingHistory} />;
}*/

//export default HistoryTable;