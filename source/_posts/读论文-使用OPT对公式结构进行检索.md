---
title: 读论文——Structural Similarity Search for Formulas Using Leaf-Root Paths in Operator Subtrees
author: Hank
tags:
  - 公式检索
  - 操作数
date: 2021-07-17 20:50:03
categories: 学习
summary: 本文描述了如何使用操作树来对公式进行相似度检索。
---

**作者：**Wei Zhong and Richard Zanibbi

**期刊：**Advances in Information Retrieval

看这篇文章之前，提出了三个问题：

1. 如何把公式转化为操作树？
2. 与之前接触过的树相似度算法有何不同？
3. 为什么是操作树而不是别的树？

## 数学公式相似度检索的关键问题是什么？

+ 以何种形式表达数学公式？

  ![公式的各种表示形式，来源：Recognition and retrieval of mathematical expressions](https://my-picbed.oss-cn-hangzhou.aliyuncs.com/20210718193132.png)

+ 数学公式的相似性如何衡量？

  + 结构的相似性
    + common subexpression：是否都存在相同的子表达式
    + operator commutativity：交换律
    + operator associativity：结合律
  + 符合的相似性
    + $(1+1/n)^n$与$(1+1/x)^x$ 虽然符号不同，但是$n$和$x$都表示未知数，**语义相同**，所以这两个是相同的公式；
    + $e=mc^2$与$y=ax^2$ 再考虑**物理意义**的条件下，是两个不同的公式；
  + 语义的相似性
    + 等效的公式$1/x$和$x^{-1}$，就和苹果与apple一样

## 方法

将$L^{A}T_EX$转化为操作树（OPT）。将比较公式相似度的问题转化为比较

+ 两个操作树中是否有**结构相同**的子树
+ 节点的token是否相同

为了描述结构匹配的方式，作者给出了如下的定义

#### 定义1 公共子树

公式树$Tq$和$T_d$，他们的公共子树包含两个部分，即这两个公式中结构一致的子树$\hat{T}_q$和$\hat{T}_d$，且子树的叶节点为公式树的叶节点。用公式可以表达为：
$$
C F S\left(T_{q}, T_{d}\right)=\left\{\hat{T}_{q}, \hat{T}_{d}: \hat{T}_{q} \preceq_{l} T_{q}, \hat{T}_{d} \preceq_{l} T_{d}, \hat{T}_{q} \cong \hat{T}_{d}, \hat{T}_{q} \subseteq T_{q}, \hat{T}_{d} \subseteq T_{d}\right\}
$$
其中$“\cong”$表示同构，$“\subseteq”$表示从属关系，而$“\preceq_{l}”$表示子树的叶节点为操作树的叶节点，用图片来说明

![CFF](https://my-picbed.oss-cn-hangzhou.aliyuncs.com/20210718205009.png)

