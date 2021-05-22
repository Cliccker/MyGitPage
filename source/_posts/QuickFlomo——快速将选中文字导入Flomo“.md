---
title: QucikFlomo——快速创建flomo笔记
author: Hank
tags:
  - Quicker
  - Flomo
date: 2021-05-22 23:41:46
categories: 实践
summary: 花了一晚上熟悉了Quicker的动作编辑，写了一个笔记工具~
---
## 关于Quicker
[Quicker](https://getquicker.net/)是我一直都在使用的工具软件。

<img src="https://my-picbed.oss-cn-hangzhou.aliyuncs.com/img/20210522235305.png" alt="我的Quicker界面" style="zoom:50%;" />

上图是我的Quicker操作界面，简单概括一下这个软件：我们可以在Quicker中自己编辑“动作”或者使用他人编辑好的“动作”，简单到打开一个软件，复杂到使用Quicker进行文字识别。至于价格，免费版的Quicker会有动作个数限制，专业版（￥56一年）没有限制而且多了很多稀奇古怪的功能。

我一直不遗余力的向身边的同学安利Quicker，因为它给我带来了巨大的效率提升，而且我不必为了OCR装OCR软件，为了划词翻译而装划词翻译软件，各种功能都能在Quciker中实现🤣
## 关于flomo
[flomo · 浮墨笔记](https://flomoapp.com/)是我的女朋友跟我推荐的一款笔记工具，语雀虽然已经很好的帮我储存了我的文章，但却有着十分糟糕的速记体验，而Flomo相比于语雀“知识库”的定位，更像是一个“灵感库”，用卡片记录思考，用标签分类卡片，非常适用于速记和回顾。

![flomo的多端体验](https://flomo.oss-cn-shanghai.aliyuncs.com/resource/home/202103/pic_feature_product.png)

## 关于QuickFlomo

产生编辑这个Quicker动作的想法主要来于**我女朋友在用flomo！**，其次就是flomo提供的API让我觉得应该有更多的有趣的玩法。来看看我这个小工具的食用指南吧😊

<img src="https://flomo.oss-cn-shanghai.aliyuncs.com/resource/home/202103/pic_feature_api.png" alt="flomo的API" style="zoom:50%;" />

## QuickFlomo食用指南

### 软件下载&动作安装

在[Quicker](https://getquicker.net/)的主页下载并安装适合你的Quick版本，下载完成后记得设置你的Quicker**快捷键**，比如我的快捷键是鼠标侧键。使用快捷键可以快速地调出Quicker的界面或者快速使用特定的动作。另外，建议保持Quiker开机运行。

接下来在动作库中搜索“QuickFlomo”或者直接点击[链接](https://getquicker.net/Sharedaction?code=d8de6a72-bc82-4c7d-32f5-08d91d10afcd&fromMyShare=true)跳转到本动作的页面

![现在是凌晨一点，审核估计得等会……](https://my-picbed.oss-cn-hangzhou.aliyuncs.com/img/20210523010014.png)

选择将动作复制到剪贴板，在Quicker主界面的空白按钮处右键，选择**粘贴分享的动作**

<img src="https://my-picbed.oss-cn-hangzhou.aliyuncs.com/img/20210523010403.png" alt="安装动作" style="zoom: 50%;" />

### 获取你的flomo API

成功注册flomo账号之后，我们可以在如图所示的入口找到flomo提供的API

<img src="https://my-picbed.oss-cn-hangzhou.aliyuncs.com/img/20210523010615.png" alt="获取API入口" style="zoom:50%;" />

文本框中的网址就是我们需要用到的API

<img src="https://my-picbed.oss-cn-hangzhou.aliyuncs.com/img/20210523010920.png" alt="记录API" style="zoom:50%;" />

我想你也注意到了，这个API每天都是有使用次数的

### 初始化

初次使用QuickFlomo会提醒你输入flomo的API以及默认的标签，两者在使用中均可以更改。

### 划词模式

在划词模式下，我们选中一段文本，调出Quicker主界面，再点击QuickFlomo，所选文字就直接保存到了你的flomo中了，只需三步。

<img src="https://my-picbed.oss-cn-hangzhou.aliyuncs.com/img/20210523013112.png" alt="划词模式流程" style="zoom:50%;" />

你还可以右键QuickFlomo打开自己的flomo主页，查看自己保存的笔记。

<img src="https://my-picbed.oss-cn-hangzhou.aliyuncs.com/img/20210523013145.png" alt="主页" style="zoom:50%;" />

#### 🎈Tips

+ 划词模式下，所有笔记都使用默认Tag，可以右键动作→设置默认Tag进行修改

+ 在网页中时，划词模式会返回该网页的网址，结构如下图

  <img src="https://my-picbed.oss-cn-hangzhou.aliyuncs.com/img/20210523014521.png" alt="划词模式产生的默认卡片形式" style="zoom:80%;" />

### 创作模式

不选择任何文字直接点击QuickFlomo会启动创作模式，和flomo一样，#+keyword代表标签。

<img src="https://my-picbed.oss-cn-hangzhou.aliyuncs.com/img/20210523014741.png" alt="创作模式" style="zoom:80%;" />

#### 🎈Tips

+ 默认Tag不会作用于该模式

### 👀OCR模式（待开发）

后续应该会给这个动作加上OCR功能，直接提取图片中的文字，然后记录为笔记。

### 快捷键（可选的）

如果你的快捷键还有空余的话，可以右键QuickFlomo→信息→全局快捷键，给QucikFlomo绑定一个快捷键，这样就可以不用调出Quicker界面直接使用该动作了。

做完这个动作写完使用指南，已经两点多了，赶紧洗漱睡觉😪

洗漱完搜了一下原来Quciker上已经有人分享了flomo的相关动作，而且写的比我多，学习一下人家的，再加一点新的功能进去吧！晚安~

