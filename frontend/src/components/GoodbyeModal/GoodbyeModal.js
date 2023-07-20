import React from "react";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from "react-router-dom";
import './goodbyemodal.css';

function GoodbyeModal({ onCancel }) {


  return (
    <>
    <div className="goodbye-modal-box" onClick={onCancel} >
      <div className="goodbye-modal-content" onClick={(e) => e.stopPropagation()}>

        <div className="goodbye-message">
          <p>Thank you for checking out my Nike Clone!</p>
        </div>

        <div className='goodbye-icons'>
          <a id="github" className="goodbye-github-icon" target="_blank" href="https://github.com/ahmedrazi-glitch" rel="noreferrer">
            <FaGithub size={100} />
          </a>
          <a id="linkedin" className="goodbye-linkd-icon" target="_blank" href="https://www.linkedin.com/in/raziahmed96/" rel="noreferrer">
            <FaLinkedin size={100} />
          </a>
        </div>

        <div className="back-to-home-button-div">
          <Link to='/'>
            <button className="back-to-home-button">
              Back to Home
            </button>
          </Link>
        </div>

      </div>
    </div>
    </>
  );
}

export default GoodbyeModal;