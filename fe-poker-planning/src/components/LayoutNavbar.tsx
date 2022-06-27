import {Layout} from 'antd';
import React from 'react';
import ModalHistory from './ModalHistory';
import ModalSettings from './ModalSettings';
import { Col, Row } from 'antd';
import Title from 'antd/lib/skeleton/Title';

const { Header } = Layout;

const LayoutNavBar: React.FC = () => (
  <>
    <Layout>
      <Header style={{backgroundColor: "white"}}>
      <Row>
        <Col span={12}> <h1>Test</h1></Col>
        <Col span={12}>
         <div style={{float: 'right'}}>
            <ModalSettings/>
             &nbsp;  &nbsp;
            <ModalHistory/> 
         </div>
      </Col>
      </Row>
      
      </Header>
    </Layout>
  </>
);

export default LayoutNavBar;