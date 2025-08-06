import React from 'react';
import './ThinkingIndicator.css';

const ThinkingIndicator = () => {
  return (
    <div className="thinking-indicator">
      <div className="thinking-content">
        <div className="thinking-dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
        <div className="thinking-text">AI正在思考中...</div>
      </div>
    </div>
  );
};

export default ThinkingIndicator;