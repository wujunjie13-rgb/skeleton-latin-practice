# Osteologia - 人体骨骼解剖学学习应用

这是一个用于学习人体骨骼解剖学的Web应用，特别适合医学学生和解剖学爱好者使用。应用支持中英文界面切换，并在学习和测验模式中显示骨骼的芬兰语名称。

## 功能特点

- **学习模式**：通过图片学习人体骨骼结构，查看拉丁语、中文/英文和芬兰语名称
- **测验模式**：测试对骨骼的识别能力，提供即时反馈
- **多语言支持**：界面支持中英文切换，骨骼名称显示芬兰语
- **骨骼分类**：按区域（颅骨、脊柱、胸廓、上肢骨、下肢骨）筛选骨骼
- **学习统计**：记录学习进度和测验成绩
- **收藏功能**：保存重要或难以记忆的骨骼

## 技术栈

- HTML5
- CSS3 (Tailwind CSS)
- JavaScript
- Chart.js (用于数据可视化)

## 项目结构

```
osteologia/
├── index.html          # 主HTML文件
├── css/
│   └── style.css       # 自定义CSS样式
├── js/
│   ├── app.js          # 主应用逻辑
│   └── data.js         # 骨骼数据和翻译数据
└── assets/             # 资源文件目录（如有需要）
```

## 部署方法

### 方法一：GitHub Pages

1. 将项目克隆到本地：
   ```
   git clone https://github.com/yourusername/osteologia.git
   ```

2. 进入项目目录：
   ```
   cd osteologia
   ```

3. 创建并切换到gh-pages分支：
   ```
   git checkout -b gh-pages
   ```

4. 提交所有文件：
   ```
   git add .
   git commit -m "Initial commit for GitHub Pages"
   ```

5. 推送到GitHub：
   ```
   git push origin gh-pages
   ```

6. 在GitHub仓库设置中启用GitHub Pages，选择gh-pages分支作为源。

7. 访问应用：`https://yourusername.github.io/osteologia/`

### 方法二：本地服务器

1. 使用任何静态文件服务器运行项目，例如：
   ```
   python -m http.server 8000
   ```

2. 在浏览器中访问：`http://localhost:8000`

## 使用说明

1. **学习模式**：
   - 点击"新骨骼"按钮加载随机骨骼图片
   - 点击"显示答案"查看骨骼的拉丁语、中文/英文和芬兰语名称
   - 点击"详细说明"查看骨骼的详细描述
   - 点击"收藏"按钮保存当前骨骼

2. **测验模式**：
   - 点击"测验模式"切换到测验界面
   - 选择你认为正确的骨骼名称
   - 点击"检查答案"验证你的选择
   - 点击"下一题"继续测验

3. **语言切换**：
   - 点击顶部导航栏中的"中文"或"English"按钮切换界面语言

4. **骨骼筛选**：
   - 点击底部的骨骼区域按钮筛选特定类型的骨骼

## 数据扩展

如需添加更多骨骼数据，请编辑`js/data.js`文件，按照现有格式添加新的骨骼对象：

```javascript
{
  latin: "BoneName",
  common: {
    zh: "中文名称",
    en: "English Name"
  },
  finnish: "芬兰语名称",
  category: "category-type", // 骨骼类别：category-skull, category-spine, category-thorax, category-upper, category-lower
  imageId: 1234, // 使用picsum.photos的图片ID
  description: {
    zh: "中文描述",
    en: "English Description"
  }
}
```

## 贡献

欢迎提交问题报告和功能建议，帮助改进这个学习工具！

## 许可证

MIT License
