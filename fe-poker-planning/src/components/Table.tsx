import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react'
import '../css/Table.css';
import { Game } from '../model/Game';
import { Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

interface GameProps {
  game: Game;
}

export default function Table<GameProps>({ game }: { game: Game }) {

  const [showCopiedMessage, setShowCopiedMessage] = useState(false);

  function inviteLink() {
    const dummy = document.createElement('input');
    const url = `${process.env.REACT_APP_JOIN_GAME}/${game.id}`;
    alert(url);
    document.body.appendChild(dummy);
    dummy.value = url;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    setShowCopiedMessage(true);

  }

  return (
    <div>
      <div className='table'>
        <div className='average-title'>
          <div >
            Average:
          </div>
          <div className='average'>
            <h5>0</h5>
          </div>
        </div>
        <div className='tabelContentArea'>
          <button className='buttonStyle'>
            <FontAwesomeIcon icon={faEye} className="eyeStyle" />
            <p className='textUnderButton'>Reveal</p>
          </button>
          <button className='buttonInviteStyle'>
            <FontAwesomeIcon icon={faLink} className="inviteStyle" onClick={() => inviteLink()} />
            <p className='textUnderButton'>Invite</p>
          </button>
        </div>
      </div>
      <Snackbar
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        open={showCopiedMessage}
        autoHideDuration={5000}
        onClose={() => setShowCopiedMessage(false)}
        >
          <Alert severity='success'>Invite Link Copied to clipboard</Alert>
        </Snackbar>
    </div>
  )
}
