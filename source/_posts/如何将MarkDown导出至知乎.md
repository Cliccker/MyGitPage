---
title: 如何将MarkDown笔记导出至知乎
author: Hank
categories: 技巧
tags:
  - MarkDown
summary: 知乎上的一段代码
abbrlink: 94fe
date: 2020-07-16 20:08:00
---



```python
# 2019-11-26

import re
import sys
def replace(file_name, output_file_name):
    try:
        pattern1 = r"\$\$\n*([\s\S]*?)\n*\$\$"
        new_pattern1 = r'\n<img src="https://www.zhihu.com/equation?tex=\1" alt="\1" class="ee_img tr_noresize" eeimg="1">\n'
        pattern2 = r"\$\n*(.*?)\n*\$"
        new_pattern2 =r'\n<img src="https://www.zhihu.com/equation?tex=\1" alt="\1" class="ee_img tr_noresize" eeimg="1">\n'
        f = open(file_name, 'r',encoding='utf-8')
        f_output = open(output_file_name, 'w',encoding='utf-8')
        all_lines = f.read()
        new_lines1 = re.sub(pattern1, new_pattern1, all_lines)
        new_lines2 = re.sub(pattern2, new_pattern2, new_lines1)
        f_output.write(new_lines2)

        f.close()
        f_output.close()
    except Exception as e:
        print(e)


if __name__ == '__main__':
    file_name = 'original_version.md'
    file_name_pre = file_name.split(".")[0]
    output_file_name = "zhihu_version.md"
    replace(file_name, output_file_name)
    print('Trans from {} to {}'.format(file_name, output_file_name))
```

放在同一文件夹下，将markdown文件改名为'original_version.md'，运行就可以了