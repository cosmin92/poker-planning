import { useState } from "react";
import { Game } from "../types/Game";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import "../css/Table.css";
import { finishGame } from "../service/Games";
import React from "react";
import { resetGame } from '../service/Players';
import { Button } from 'antd';

interface TableProps {
  game: Game;
  currentPlayerId: string;
}

export const Table: React.FC<TableProps> = ({ game, currentPlayerId }) => {
  

  
  const [showCopiedMessage, setShowCopiedMessage] = useState(false);

  function inviteLink() {
    const dummy = document.createElement("input");
    const url = `${window.location.origin}/join/${game.id}`;
    document.body.appendChild(dummy);
    dummy.value = url;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    setShowCopiedMessage(true);
  }

  const isModerator = (moderatorId: string, currentPlayerId: string) => {
    return moderatorId === currentPlayerId;
  };

  return (
    <div>
      <div className="table">
        <div className="average-title">
          <div>Average:</div>
          <div className="average">
            <h5>{game.average}</h5>
          </div>
        </div>
        <div className="tabelContentArea">
          <button className="buttonStyle">
            <FontAwesomeIcon
              icon={faEye}
              className="eyeStyle"
              onClick={() => finishGame(game.id)}
            />
            <p className="textUnderButton">Reveal</p>
          </button>
          <button className="buttonInviteStyle">
            <FontAwesomeIcon
              icon={faLink}
              className="inviteStyle"
              onClick={() => inviteLink()}
            />
            <p className="textUnderButton">Invite</p>
          </button>
        </div>
      </div>
      <Button className="text-nearFooter" onClick={() => resetGame(game.id, "😴")}>New Game</Button>
      <Snackbar
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
        open={showCopiedMessage}
        autoHideDuration={5000}
        onClose={() => setShowCopiedMessage(false)}
      >
        <Alert severity="success">Invite Link Copied to clipboard</Alert>
      </Snackbar>
    </div>
  );
};
