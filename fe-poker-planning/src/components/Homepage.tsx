import React, { useState } from 'react'; 
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import '../css/HomepageStyle.css';
import HomepageNavbar from './HomepageNavbar';

const Homepage = () => {

  const [user, setUser] = useState(false);

  return (
    <>
    <HomepageNavbar />

		<div className='home-items'>
				<h1>Scrum Poker for agile development teams</h1>
				<p>Have fun while being productive with our simple and complete tool.</p>

        <div className={user ? '' : 'hidden' }>
          <Link to='/starting'>
            <Button type="primary" shape="round">
                  Start new game
            </Button>
          </Link>
        </div>

        <div className={user ? 'hidden' : '' }>
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

export default Homepage;