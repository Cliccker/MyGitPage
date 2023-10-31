---
title: 如何导出 iOS 备忘录
author: Hank
categories: 技巧
tags:
  - GitHub
  - 加速
date: 2023-10-31 12:53:00
---



博客好久没更新了，今天来水一波内容：

**如何导出 iOS 备忘录？**

这可能是一个让大家头疼已久的问题，我也是在网上百般寻找方法，有说用第三方软件的，也有说扒数据库的。首先第三方软件肯定是不可能去用的，死贵而且又不安全。数据库那些我又搞不懂，想找找看有没有懒人一键导出的方法。还真让我找到了，就是用 AppleScript。

简单介绍一下吧，AppleScript 是一种 macOS 上的脚本语言，用于自动化任务和与应用程序进行交互。它使用 Apple Events 通信协议并支持 GUI 脚本。常见用途包括文件管理、工作流自动化、批量编辑文档和与 macOS 内置应用（如 Finder、Mail 等）或第三方应用交互。

简单来说，你可以用 AppleScript 读取备忘录的内容，再用 Python 进行格式化和存储。

+ 准备工作

1. 一台装有Python 环境的 Mac
2. 把所有的笔记都整理到一个“备忘录”文件夹中

+ 代码

```python
import subprocess
import os
import re


def remove_html_tags(text):
    clean = re.compile('<.*?>')
    return re.sub(clean, '', text)


def get_notes():
    script = '''
    tell application "Notes"
        set noteNames to the name of every note of folder "Notes"
        set noteContents to the body of every note of folder "Notes"
        return \{noteNames, noteContents\}
    end tell
    '''
    process = subprocess.Popen(['osascript', '-e', script], stdout=subprocess.PIPE)
    output, _ = process.communicate()
    note_names, note_contents = output.decode('utf-8').split('\n', 1)
    note_names = note_names.strip().split(', ')
    note_contents = note_contents.strip().split(', ')
    note_contents = [remove_html_tags(content) for content in note_contents]
    return note_names, note_contents


def save_as_markdown(note_names, note_contents):
    if not os.path.exists("NotesMarkdown"):
        os.mkdir("NotesMarkdown")

    for name, content in zip(note_names, note_contents):
        with open(f"NotesMarkdown/\{name\}.md", "w") as f:
            f.write(content)


note_names, note_contents = get_notes()
save_as_markdown(note_names, note_contents)
```

⚠️：运行过程中脚本会要求权限，允许就好了