// FullScreenDiv.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import './FullScreenDiv.css';

const FullScreenDiv = () => {
  return (
    <div className="fullscreen-div">
      <FontAwesomeIcon icon={faBars} className="icon-left" />
      <FontAwesomeIcon icon={faXmark} className="icon-right" />
    </div>
  );
};

export default FullScreenDiv;
