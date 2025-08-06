import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      navigate('/chat', { state: { initialMessage: inputValue.trim() } });
    }
  };

  const handleFeatureClick = (featureType) => {
    navigate(`/feature/${featureType}`);
  };

  const features = [
    { id: 'writing', icon: '✏️', name: '帮我写作' },
    { id: 'image', icon: '🎨', name: '图像生成' },
    { id: 'search', icon: '🔍', name: 'AI 搜索' },
    { id: 'read', icon: '📖', name: 'AI 阅读' },
    { id: 'code', icon: '💻', name: 'AI 编程' },
    { id: 'translate', icon: '🌐', name: '翻译' },
    { id: 'more', icon: '⚡', name: '更多' }
  ];

  return (
    <div className="home-page">
      <div className="home-content">
        <div className="greeting">
          <h1>中午好，有什么我能帮你的吗？</h1>
        </div>
        
        <div className="input-section">
          <form onSubmit={handleSubmit} className="input-form">
            <div className="input-container">
              <input
                type="text"
                placeholder="发消息，输入 @ 选择技能域 / 选择文件"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="message-input"
              />
              <button 
                type="submit" 
                className="send-button"
                disabled={!inputValue.trim()}
              >
                <span className="send-icon">↑</span>
              </button>
            </div>
          </form>
        </div>

        <div className="features-section">
          <div className="features-grid">
            {features.map((feature) => (
              <button
                key={feature.id}
                className="feature-button"
                onClick={() => handleFeatureClick(feature.id)}
              >
                <span className="feature-icon">{feature.icon}</span>
                <span className="feature-name">{feature.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;