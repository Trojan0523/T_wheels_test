---
title: 快速上手
---
# 起步

文档有待完善

## 安装

请参考 [安装](../install/) 章节

1. 添加CSS样式

    使用本框架前, 请在 CSS中开启border-box
    
    ```
    *,*::before, *::after {box-sizing: border-box;}
    ```
    IE 8 及以上浏览齐都支持此样式。 
    
    你还需要设置默认颜色等变量 (后期可改为SCSS变量)
    
    ```
    
     html /*HTML变量*/
            {
            --button-height: 32px;
            --font-size: 14px;
            --button-bg: white;
            --border-radius: 4px;
            --color: #333;
            --border-color: #999;
            --border-color-hover: #666;
            --button-active-bg: #eee;
            }
    
    html /*SCSS变量*/
            {
            $button-height: 32px;
            $font-size: 14px;
            $button-bg: white;
            $border-radius: 4px;
            $color: #333;
            $border-color: #999;
            $border-color-hover: #666;
            $button-active-bg: #eee;
            }
    
    ```
    IE 15 及以上浏览器都支持此样式。 

## Hello-world

```
import {Button} from 't_wheels'
import Vue from 'vue'

new Vue({
    el: '#app',
    components: {
        t-button: Button
    }
)}
```

通过引入一个`component`组件`t-button`即可在你的index.html中以`Tag`的形式引用Button组件啦