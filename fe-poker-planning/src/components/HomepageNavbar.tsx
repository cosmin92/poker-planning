import React, { useState } from 'react'; 
import { Button } from 'antd';
import { SmileTwoTone } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import '../css/HomepageNavbarStyle.css';

const HomepageNavbar = () => {

  return (
    <>
        <div className='nav-home-logo'>
            <SmileTwoTone style={{ fontSize: '30px' }} /> <h2>PokerPlanning</h2>
        </div>

        <div className='nav-home-welcome'>
            <h2>Welcome, user!</h2>

            <div className='nav-home-button'>
                <Link to='/login'>
                    <Button type="primary" shape="round" size='large'>
                        Login
                    </Button>
                </Link>
            </div>
        </div>
    </>
  );
};

export default HomepageNavbar;