---
title: Project Debater的辩论组织模块
author: Hank
tags:
  - AI
  - 辩论
  - 读论文
date: 2021-03-29 09:50:54
mathjax: true
categories: 学习
summary: 上一篇论文没有讲Project Debater是依靠哪些技术来实现组织语言的，我们在这一篇好好讲
---

首先我们来看一下论文使用了哪些语料来构建论述的

<img src="https://my-picbed.oss-cn-hangzhou.aliyuncs.com/img/20210329193437.png" alt="Debating Construction" style="zoom:67%;" />

而论述的构建分为以下几个阶段

## 过滤元素

由于司法数据库中的声明和证据是按照一个神经网络模型打分并且排序的，为了筛选出最符合的几项，一般的方法是设定一个通用的阈值。但是这样做会有两个问题：

1. 不同动议下这个阈值应当是不同的；
2. 由于分数是神经网络给出的，无法通过概率去解释这个分数（Do not have a clear probabilistic interpretation）。

为了解决这个问题，文章提出了设置一系列的门槛，$threshold_k,k \in \{60,70,80,90\}$，在这个门槛之上的元素至少有$k\%$的准确度，也就是说分数在$threshold_{80}$以上的文章有$80\%$的准确度。为了实现这个分级，设计了两种算法：

1. 针对声明，采用交叉验证（Cross Validation）的方法，具体如图

   ![交叉验证](https://my-picbed.oss-cn-hangzhou.aliyuncs.com/img/20210329212326.png)

   在每一轮中，除不考虑的动议之外，对其他动议中声明的分数以降序排列，找到能够满足准确度在$k\%$以上的**最小分数**作为该轮的$threshold_k$，最后求取所有$threshold_k$的中位数，作为整体的$threshold_k$。

2. 针对证据文本