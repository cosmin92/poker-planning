import {Table} from 'antd';
import React, { useEffect, useState } from 'react';
import { getHistory } from '../service/Games';
import { Game } from '../types/Game';

const columns =  [
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

const HistoryTable: React.FC= () => {
 const [history, setHistory] = useState<Game[]>() 
 useEffect (()=>{
  async function fetchData () {
    let historyGameList = await getHistory();
    setHistory(historyGameList);
  } 
   fetchData();
 }, [])
 
 const dataSource: Game[] = []
 history?.forEach(function (value) {
  dataSource.push(value);
 })
 
 console.log(history);
 return <Table columns={columns} dataSource={dataSource}/>;
}

export default HistoryTable;