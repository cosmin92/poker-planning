import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import React from 'react';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Issue',
    dataIndex: 'issue',
    key: 'issue'
  },
  {
    title: 'Result',
    dataIndex: 'Result',
    key: 'Result'
  },
  {
    title: 'Agreement',
    dataIndex: 'Agreement',
    key: 'Agreement'
  },
  {
    title: 'Players Voted/Total',
    key: 'PlayersVote',
    dataIndex: 'PlayersVote'
  },
  {
    title: 'Time',
    key: 'Time',
    dataIndex: 'Time'
  },
];

const data: DataType[] = [
];

const HistoryTable: React.FC = () => <Table columns={columns} dataSource={data} />;

export default HistoryTable;