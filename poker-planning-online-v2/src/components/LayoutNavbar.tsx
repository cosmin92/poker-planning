import {Layout} from 'antd';
import React from 'react';
import ModalHistory from './ModalHistory';
import ModalSettings from './ModalSettings';
import { Col, Row } from 'antd';
import { Game } from '../types/Game';


interface LayoutNavBarProps {
    game: Game;
  }

const { Header } = Layout;

const LayoutNavBar: React.FC<LayoutNavBarProps> = ({game}) => (
  <>
    <Layout>
      <Header style={{backgroundColor: "white"}}>
      <Row>
        <Col span={12}> <h1>Test</h1></Col>
        <Col span={12}>
         <div style={{float: 'right'}}>
            <ModalHistory  game={game}/> 
         </div>
      </Col>
      </Row>
      </Header>
    </Layout>
  </>
);

export default LayoutNavBar;