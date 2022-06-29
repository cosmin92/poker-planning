import React, { useState } from 'react'; 
import { Button } from 'antd';
import { SmileTwoTone } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import '../css/HomepageNavbarStyle.css';
import NavbarLogStatus from './NavbarLogStatus';

const HomepageNavbar = () => {

  return (
    <>
        <div className='nav-home-logo'>
            <SmileTwoTone style={{ fontSize: '30px' }} /> <h2>PokerPlanning</h2>
        </div>

        <div className='nav-home-welcome'>
            <NavbarLogStatus />
        </div>
    </>
  );
};

export default HomepageNavbar;