# AI智能问答前端项目

这是一个基于React的AI智能问答前端应用，实现了现代化的聊天界面和多功能AI助手。

## 功能特性

### 🏠 主页面
- 友好的问候界面
- 智能输入框，支持直接发送消息
- 7个扩展功能按钮，包括：
  - ✏️ 帮我写作
  - 🎨 图像生成  
  - 🔍 AI搜索
  - 📖 AI阅读
  - 💻 AI编程
  - 🌐 翻译
  - ⚡ 更多功能

### 💬 聊天界面
- 实时消息显示
- 用户消息（蓝色气泡）
- AI回复消息（灰色气泡）
- AI思考状态指示器
- 响应式设计，支持移动端

### 🤖 AI思考状态
- 动画加载点效果
- "AI正在思考中..."提示文字
- 模拟真实AI处理时间（2-4秒）

### 🔧 扩展功能页面
- 每个功能的详细介绍
- 功能特点展示
- 快速开始对话按钮
- 返回主页导航

## 技术栈

- **React 18** - 前端框架
- **React Router DOM** - 路由管理
- **CSS3** - 样式设计
- **响应式设计** - 支持移动端和桌面端

## 项目结构

```
src/
├── components/           # React组件
│   ├── HomePage.js      # 主页面组件
│   ├── HomePage.css     # 主页面样式
│   ├── ChatPage.js      # 聊天页面组件
│   ├── ChatPage.css     # 聊天页面样式
│   ├── ThinkingIndicator.js  # AI思考指示器
│   ├── ThinkingIndicator.css # 思考指示器样式
│   ├── FeaturePage.js   # 功能页面组件
│   └── FeaturePage.css  # 功能页面样式
├── App.js              # 主应用组件
├── App.css             # 应用样式
├── index.js            # 应用入口
└── index.css           # 全局样式
```

## 安装和运行

1. 安装依赖：
```bash
npm install
```

2. 启动开发服务器：
```bash
npm start
```

3. 在浏览器中打开 [http://localhost:3000](http://localhost:3000)

## 构建生产版本

```bash
npm run build
```

## 功能说明

### 路由设计
- `/` - 主页面（问候界面）
- `/chat` - 聊天界面
- `/feature/:type` - 功能详情页面

### 状态管理
- 使用React Hooks进行状态管理
- 消息历史记录
- AI思考状态控制
- 路由参数传递

### 响应式设计
- 支持桌面端（>768px）
- 支持移动端（≤768px）
- 灵活的网格布局
- 触摸友好的交互

## 自定义配置

### 修改AI回复逻辑
在 `ChatPage.js` 中的 `generateAIResponse` 函数可以自定义AI回复内容。

### 添加新功能
在 `FeaturePage.js` 中的 `featureConfig` 对象可以添加新的功能类型。

### 样式定制
每个组件都有对应的CSS文件，可以根据需要调整样式。

## 浏览器兼容性

- Chrome (推荐)
- Firefox
- Safari
- Edge

## 许可证

MIT License