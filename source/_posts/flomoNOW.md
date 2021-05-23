---
title: flomoNOW——快速创建flomo笔记
author: Hank
tags:
  - Quicker
  - flomo
date: 2021-05-22 23:41:46
categories: 实践
summary: 花了一晚上熟悉了Quicker的动作编辑，写了一个笔记工具~
---
## 关于Quicker
[Quicker](https://getquicker.net/)是我一直都在使用的工具软件。

<img src="https://my-picbed.oss-cn-hangzhou.aliyuncs.com/img/20210523194705.png" alt="我的Quicker界面" style="zoom:80%;" />

上图是我的Quicker操作界面，简单概括一下这个软件：我们可以在Quicker中自己编辑“动作”或者使用他人编辑好的“动作”，简单到打开一个软件，复杂到使用Quicker进行文字识别。至于价格，免费版的Quicker会有动作个数限制，专业版（￥56一年）没有限制而且多了很多稀奇古怪的功能。

我一直不遗余力的向身边的同学安利Quicker，因为它给我带来了巨大的效率提升，而且我不必为了OCR装OCR软件，为了划词翻译而装划词翻译软件，各种功能都能在Quciker中实现🤣
## 关于flomo
[flomo · 浮墨笔记](https://flomoapp.com/)是我的女朋友跟我推荐的一款笔记工具，语雀虽然已经很好的帮我储存了我的文章，但却有着十分糟糕的速记体验，而flomo相比于语雀“知识库”的定位，更像是一个“灵感库”，用卡片记录思考，用标签分类卡片，非常适用于速记和回顾。

![flomo的多端体验](https://flomo.oss-cn-shanghai.aliyuncs.com/resource/home/202103/pic_feature_product.png)

## 关于flomoNOW

产生编辑这个Quicker动作的想法主要来于**我女朋友在用flomo！**，其次就是flomo提供的API让我觉得应该有更多的有趣的玩法。来看看我这个小工具的食用指南吧😊

<img src="https://flomo.oss-cn-shanghai.aliyuncs.com/resource/home/202103/pic_feature_api.png" alt="flomo的API" style="zoom:50%;" />

## flomoNOW食用指南

### 软件下载&动作安装

在[Quicker](https://getquicker.net/)的主页下载并安装适合你的Quick版本，下载完成后记得设置你的Quicker**快捷键**，比如我的快捷键是鼠标侧键。使用快捷键可以快速地调出Quicker的界面或者快速使用特定的动作。另外，建议保持Quiker开机运行。

接下来在动作库中搜索“flomoNOW”或者直接点击[链接](https://getquicker.net/Sharedaction?code=d8de6a72-bc82-4c7d-32f5-08d91d10afcd&fromMyShare=true)跳转到本动作的页面

![每次更新动作都会审核……](https://my-picbed.oss-cn-hangzhou.aliyuncs.com/img/20210523194812.png)

选择将动作复制到剪贴板，在Quicker主界面的空白按钮处右键，选择**粘贴分享的动作**

<img src="C:/Users/76084/AppData/Roaming/Typora/typora-user-images/image-20210523194938081.png" alt="安装动作" style="zoom:50%;" />

### 获取你的flomo API

成功注册flomo账号之后，我们可以在如图所示的入口找到flomo提供的API

<img src="https://my-picbed.oss-cn-hangzhou.aliyuncs.com/img/20210523010615.png" alt="获取API入口" style="zoom:50%;" />

文本框中的网址就是我们需要用到的API

<img src="https://my-picbed.oss-cn-hangzhou.aliyuncs.com/img/20210523010920.png" alt="记录API" style="zoom:50%;" />

我想你也注意到了，这个API每天都是有使用次数的

### 初始化

初次使用flomoNOW会提醒你输入flomo的API以及默认的标签，其中

+ API为上文提到的网址；
+ 多个标签之间可以使用空格进行分隔。

### 划词模式

在划词模式下，我们选中一段文本，调出Quicker主界面，再点击flomoNOW，所选文字就直接保存到了你的flomo中了，只需三步。

<img src="https://my-picbed.oss-cn-hangzhou.aliyuncs.com/img/20210523195843.png" alt="划词模式使用步骤" style="zoom:80%;" />

你还可以右键flomoNOW打开自己的flomo主页，查看自己保存的笔记，或者使用flomo的界面保存图片（目前flomo的API还不支持图片）

<img src="https://my-picbed.oss-cn-hangzhou.aliyuncs.com/img/20210523200042.png" alt="打开个人主页" style="zoom:80%;" />

#### 🎈Tips

+ 划词模式下，所有笔记都使用默认Tag，可以右键动作→配置信息进行修改

+ 在网页中时，划词模式会返回该网页的网址，结构如下图

  <img src="https://my-picbed.oss-cn-hangzhou.aliyuncs.com/img/20210523014521.png" alt="划词模式产生的默认卡片形式" style="zoom:80%;" />

### 创作模式

不选择任何文字直接点击flomoNOW会启动创作模式，输入方式和flomo一样。

<img src="https://my-picbed.oss-cn-hangzhou.aliyuncs.com/img/20210523014741.png" alt="创作模式" style="zoom:80%;" />

#### 🎈Tips

+ 默认Tag不会作用于该模式

### OCR模式

想做这个模式的原因主要有两个，第一是有时候我会用电脑端的微信读书~~摸鱼~~；其次是有些文字内容可能本来就是图片，比如微博的长图。这时候就需要动用OCR识别文字了，由于使用的是基础版OCR，不能保证识别的准确性，所以我还添加了文本编辑功能。

OCR模式的使用方式也十分简单，具体为：

右键flomoNOW→OCR模式→选取识别区域→编辑识别结果（修改错误，增加tag）→关闭窗口。

#### 🎈Tips

+ 基础的OCR无法准确地识别手写文字或者过于模糊的文字，如果有需要我后面会增加专业的识别API。

### 针对个别软件的优化（待增加）

[宋五八](https://getquicker.net/User/Actions/64068-宋五八)的动作[flomo快速添加](https://getquicker.net/Sharedaction?code=65e9bd9e-ef03-42ba-a1f1-08d89ff18571)给了我灵感，他为微信、网易云音乐和QQ音乐等软件做了适配，实现了更多的玩法。或许我后续也可试试看。

### 快捷键（可选的）

如果你的快捷键还有空余的话，可以右键flomoNOW→信息→全局快捷键，给QucikFlomo绑定一个快捷键，这样就可以不用调出Quicker界面直接使用该动作了（仅限划词模式和创作模式）

## 更新日志

+ 5.23 添加了OCR模式，更改了一些说明和图片，更改动作名称和图标

