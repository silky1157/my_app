// FullScreenDiv.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import './FullScreenDiv.css';

const FullScreenDiv = () => {
  return (
    <div className="fullscreen-div">
      <a href="#menu" className="icon-left">
        <FontAwesomeIcon icon={faBars} />
      </a>
      <a href="#close" className="icon-right">
        <FontAwesomeIcon icon={faXmark} />
      </a>
    </div>
  );
};

export default FullScreenDiv;
