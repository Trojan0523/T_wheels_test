# T_wheels 一个Vue UI组件库

[![Build Status](https://travis-ci.org/Trojan0523/T_wheels_test.svg?branch=master)](https://travis-ci.org/Trojan0523/T_wheels_test)

## 介绍
这是我在学习Vue过程中做的一个 UI 框架， 希望对你有用。
## 开始使用

1. 添加CSS样式

    使用本框架前, 请在 CSS中开启border-box
    
    ```
    *,*::before, *::after {box-sizing: border-box;}
    ```
    IE 8 及以上浏览齐都支持此样式。 
    
    你还需要设置默认颜色等变量 (后续会改为SCSS变量)
    
    ```
    html 
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
    
    ```
    IE 15 及以上浏览齐都支持此样式。 

2. 安装T_Wheels
    ```
   npm i --save trojan-test-1-1
   ```
3. 引入trojan-test-1-1
    ```
    import {Button, ButtonGroup, Icon} from 'trojan-test-1-1'
    import 'trojan-test-1-1/dist/index.css'
   
    export default {
        name: 'app',
        components: {
            HelloWorld,
            'g-button': Button,
            't-icon': Icon
   }
   }
    ```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码
> 作者: 卜雄宇(Trojan)

