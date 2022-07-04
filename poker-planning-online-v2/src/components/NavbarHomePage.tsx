import { SmileTwoTone } from '@ant-design/icons';
import React from 'react';
import '../css/HomepageNavbarStyle.css';

const HomepageNavbar: React.FC = () => {

  return (
    <>
        <div className='nav-home-logo'>
            <SmileTwoTone style={{ fontSize: '30px' }} /> <h2>PokerPlanning</h2>
        </div>

    </>
  );
};

export default HomepageNavbar;