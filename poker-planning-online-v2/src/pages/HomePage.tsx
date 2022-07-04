import React from "react";
import { useRouteMatch } from "react-router-dom";
import "../css/HomepageStyle.css";
import { CreateGame } from "../components/CreateGame";
import { JoinGame } from "../components/JoinGame";
import HomepageNavbar from "../components/NavbarHomePage";
const HomePage = () => {
  const isJoin = useRouteMatch("/join");

  return (
    <>
    <HomepageNavbar />
      <div className="home-items">
        <h1>Scrum Poker for agile development teams</h1>
        <p>
          Have fun while being productive with our simple and complete tool.
        </p>
        <div className="game-creation-info-area">
          {isJoin ? <JoinGame /> : <CreateGame />}
        </div>
      </div>
    </>
  );
};

export default HomePage;
