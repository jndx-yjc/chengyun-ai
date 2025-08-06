import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './FeaturePage.css';

const FeaturePage = () => {
  const { type } = useParams();
  const navigate = useNavigate();

  const featureConfig = {
    writing: {
      title: '帮我写作',
      icon: '✏️',
      description: '我可以帮您创作各种类型的文本内容',
      features: [
        '文章写作',
        '邮件撰写',
        '创意写作',
        '学术论文',
        '商业文案',
        '社交媒体内容'
      ]
    },
    image: {
      title: '图像生成',
      icon: '🎨',
      description: 'AI图像生成功能，创造独特的视觉内容',
      features: [
        '文本到图像',
        '风格转换',
        '图像编辑',
        '概念设计',
        '艺术创作',
        '产品设计'
      ]
    },
    search: {
      title: 'AI 搜索',
      icon: '🔍',
      description: '智能搜索和信息检索服务',
      features: [
        '网络搜索',
        '学术检索',
        '实时信息',
        '数据分析',
        '趋势分析',
        '信息整合'
      ]
    },
    read: {
      title: 'AI 阅读',
      icon: '📖',
      description: '智能文档阅读和理解分析',
      features: [
        '文档总结',
        '内容分析',
        '关键信息提取',
        '多语言阅读',
        '格式转换',
        '智能问答'
      ]
    },
    code: {
      title: 'AI 编程',
      icon: '💻',
      description: '编程助手，帮助您编写和优化代码',
      features: [
        '代码生成',
        '代码审查',
        '错误调试',
        '性能优化',
        '文档生成',
        '技术解答'
      ]
    },
    translate: {
      title: '翻译',
      icon: '🌐',
      description: '多语言翻译服务',
      features: [
        '文本翻译',
        '实时对话翻译',
        '文档翻译',
        '语言检测',
        '语法检查',
        '本地化服务'
      ]
    },
    more: {
      title: '更多功能',
      icon: '⚡',
      description: '探索更多AI功能',
      features: [
        '数据分析',
        '表格处理',
        '演示文稿',
        '思维导图',
        '项目管理',
        '学习辅导'
      ]
    }
  };

  const currentFeature = featureConfig[type] || featureConfig.more;

  const handleBackToHome = () => {
    navigate('/');
  };

  const handleStartChat = () => {
    navigate('/chat', { 
      state: { 
        initialMessage: `我想使用${currentFeature.title}功能，请告诉我如何开始？` 
      } 
    });
  };

  return (
    <div className="feature-page">
      <div className="feature-header">
        <button className="back-button" onClick={handleBackToHome}>
          ← 返回首页
        </button>
      </div>

      <div className="feature-content">
        <div className="feature-hero">
          <div className="feature-icon-large">{currentFeature.icon}</div>
          <h1 className="feature-title">{currentFeature.title}</h1>
          <p className="feature-description">{currentFeature.description}</p>
        </div>

        <div className="feature-capabilities">
          <h2>功能特点</h2>
          <div className="capabilities-grid">
            {currentFeature.features.map((feature, index) => (
              <div key={index} className="capability-item">
                <span className="capability-check">✓</span>
                <span className="capability-text">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="feature-actions">
          <button className="start-chat-button" onClick={handleStartChat}>
            开始对话
          </button>
          <button className="learn-more-button" onClick={handleBackToHome}>
            了解更多功能
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturePage;