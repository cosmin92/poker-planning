import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLink} from '@fortawesome/free-solid-svg-icons';
import {faEye} from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import '../css/Table.css';

export default function Table() {
  return (
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
        <FontAwesomeIcon icon={faLink} className="inviteStyle" />
        <p className='textUnderButton'>Invite</p>
        </button>
      </div>
    </div>
  )
}
