import React, { useState } from 'react'; 
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import '../css/HomepageStyle.css';
import HomepageNavbar from './HomepageNavbar';

const Homepage = () => {
  // true if user is logged in
  const [user, setUser] = useState(false);

  function fakeLogin() {
    setUser(!user);
  }

  return (
    <>
    <HomepageNavbar />
    <button onClick={() => fakeLogin()}>Simulate logged in/out user</button>

		<div className='home-items'>
				<h1>Scrum Poker for agile development teams</h1>
				<p>Have fun while being productive with our simple and complete tool.</p>

        <div className={user ? '' : 'hidden' }>
          <Link to='/starting'>
            <Button type="primary" shape="round" size='large'>
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