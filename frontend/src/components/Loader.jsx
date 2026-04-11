import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader-content">
        <h1 className="loader-name">
          <span className="char">B</span>
          <span className="char">a</span>
          <span className="char">n</span>
          <span className="char">s</span>
          <span className="char">h</span>
          <span className="char">i</span>
        </h1>
        <div className="loader-line"></div>
      </div>
    </div>
  );
};

export default Loader;
