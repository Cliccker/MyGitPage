# MyGitPage 个人博客项目

基于Hexo静态博客框架搭建的个人博客站点，使用Material Design风格的[matery主题](themes/matery/README_CN.md)。

## 内容特色

🎨 **主题领域**  
- 互联网产品观察  
- 技术生活随笔  
- 知识图谱前沿  
- 效率工具测评

📚 **专栏精选**  
- 《知识图谱》系列读书笔记  
- 论文精读札记  
- 产品分析实战案例  
- 技术人的社会观察

## 快速入门

```bash
# 基础环境
node -v # 需14+版本

# 本地预览
npm install
hexo server

## 快速开始

```bash
# 克隆项目
git clone https://github.com/yourusername/MyGitPage.git

# 安装依赖
npm install

# 本地运行
hexo clean && hexo server
```

## 主题配置

1. 修改`_config.yml`中的`theme: matery`
2. 配置导航菜单（详见[主题文档](themes/matery/README_CN.md)）
3. 自定义`source/_data/friends.json`添加友链

## 文章管理

```bash
# 新建文章
hexo new post "文章标题"

# 新建分类页
hexo new page categories

# 新建关于页 
hexo new page about
```

## 精选文章

📝 [《焦虑逃离计划》](/posts/焦虑逃离计划)  
🔍 [《产品分析实战：T3出行》](/posts/产品分析实战_T3出行)  
💡 [《如何优雅地管理数字生活》](/posts/关于博客的思考)  
🎯 [《知识图谱前沿论文解读》](/posts/读论文_KEQA：基于知识图谱嵌入的问答系统)

## 贡献说明

欢迎通过Issue提交问题或通过Pull Request贡献代码，请遵循现有代码风格。

---
更多主题配置细节请参考[主题文档](themes/matery/README_CN.md)