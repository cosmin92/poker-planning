import React from 'react'; 
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import '../css/HomepageStyle.css';
import { PlayerCreationInterfaceImpl } from '../repositoryImpl/PlayerCreationInterfaceImpl';
import { PlayerCreationInterface } from '../repository/PlayerCreationInterface';
import { PlayerCreation } from '../model/PlayerCreation';

const Homepage = () => {
  return (
    <>
		<div className='home-items'>
				<h1>Scrum Poker for agile development teams</h1>
				<p>Have fun while being productive with our simple and complete tool.</p>
        <Link to='/starting'>
          <Button type="primary" shape="round">
                Start new game
          </Button>
        </Link>
			</div>
    </>
  );
};

export default Homepage;