import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ThinkingIndicator from './ThinkingIndicator';
import './ChatPage.css';

const ChatPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isThinking, setIsThinking] = useState(false);

  useEffect(() => {
    // 处理从首页传来的初始消息
    if (location.state?.initialMessage) {
      const initialMessage = location.state.initialMessage;
      setMessages([{ id: 1, text: initialMessage, sender: 'user' }]);
      // 模拟AI思考和回复
      simulateAIResponse(initialMessage);
    }
  }, [location.state]);

  const simulateAIResponse = async (userMessage) => {
    setIsThinking(true);
    
    // 模拟AI思考时间 (2-4秒)
    const thinkingTime = Math.random() * 2000 + 2000;
    
    setTimeout(() => {
      setIsThinking(false);
      
      // 模拟AI回复
      const aiResponse = generateAIResponse(userMessage);
      setMessages(prev => [...prev, {
        id: Date.now(),
        text: aiResponse,
        sender: 'ai'
      }]);
    }, thinkingTime);
  };

  const generateAIResponse = (userMessage) => {
    // 简单的模拟AI回复逻辑
    const responses = [
      `关于"${userMessage}"，这是一个很有趣的问题。让我为您详细解答...`,
      `您提到的"${userMessage}"确实值得深入探讨。根据我的理解...`,
      `针对"${userMessage}"这个话题，我可以从几个角度来分析...`,
    ];
    
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    
    // 添加更多内容使回复更丰富
    const additionalContent = [
      "\n\n首先，我们需要理解这个概念的基本定义和核心要素。",
      "\n\n其次，这个问题在实际应用中有多种不同的解决方案。",
      "\n\n最后，我建议您可以从以下几个方面进一步了解相关信息。"
    ];
    
    return randomResponse + additionalContent.join('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() && !isThinking) {
      const newMessage = {
        id: Date.now(),
        text: inputValue.trim(),
        sender: 'user'
      };
      
      setMessages(prev => [...prev, newMessage]);
      setInputValue('');
      simulateAIResponse(newMessage.text);
    }
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="chat-page">
      <div className="chat-header">
        <button className="back-button" onClick={handleBackToHome}>
          ← 返回首页
        </button>
        <h2>AI 智能问答</h2>
      </div>

      <div className="chat-container">
        <div className="messages-container">
          {messages.map((message) => (
            <div key={message.id} className={`message ${message.sender}`}>
              <div className="message-content">
                {message.text}
              </div>
            </div>
          ))}
          
          {isThinking && <ThinkingIndicator />}
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
                disabled={isThinking}
              />
              <button 
                type="submit" 
                className="send-button"
                disabled={!inputValue.trim() || isThinking}
              >
                <span className="send-icon">↑</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;