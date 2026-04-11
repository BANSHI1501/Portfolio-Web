import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="terminal">
        <div className="terminal-header">
          <div className="terminal-button red"></div>
          <div className="terminal-button yellow"></div>
          <div className="terminal-button green"></div>
          <div className="terminal-title">bash — portfolio</div>
        </div>
        <div className="terminal-body">
          <div className="terminal-line line-1">
            <span className="prompt">{">"}</span> Initializing Portfolio...
          </div>
          <div className="terminal-line line-2">
            <span className="prompt">{">"}</span> Welcome, I'm Banshi
          </div>
          <div className="terminal-line line-3">
            <span className="prompt">{">"}</span> CSE Student | Developer | Problem Solver
            <span className="cursor"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;

