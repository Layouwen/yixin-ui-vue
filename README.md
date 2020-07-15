# Yixin-UI 易新UI框架

[![Build Status](https://travis-ci.org/Layouwen/Yixin-UI.svg?branch=master)](https://travis-ci.org/Layouwen/Yixin-UI)

## 介绍

这是一个在学习 Vue 过程中做的一个 UI 框架。希望可以对你们有所帮助。

## 开始使用

1. 添加 CSS 样式

    使用此框架前，请将`CSS`中的`border-box`开启。
    
    ```css
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }
    ```
    
    IE 8 及以上浏览器都支持此样式。
    
    以及还需要在`CSS`设置一些默认值（后续会升级为 `SCSS` 变量）
    
    ```css
    :root {
        --button-height: 32px;  // 按钮高度
        --font-size: 14px;  // 字体大小
        --button-bg: #fff;  // 按钮背景颜色
        --button-active-bg: #eee;   // 按钮激活后背景颜色
        --border-radius: 4px;   // 按钮边框角度
        --color: #333;  // 按钮中的字体颜色
        --border-color: #999;   // 按钮边框颜色
        --border-color-hover: #666; // 按钮激活后边框颜色
    }
    ```
    
    IE 15 及以上浏览器都支持此样式。
    
2. 安装 YixinUI

   ```bash
   npm i yixin-ui
   ```

3. 引入 YixinUI

    ```js
    import {Button, ButtonGroup, Icon} from 'yixin-ui'
    import 'yixin-ui/dist/index.css'
    
    export default {   
       name: 'app',
       components: {
           HelloWord,
           'g-button': Button,
           'g-icon': Icon
       }
    }
    ```

## 文档

## 提问

## 变更记录

## 联系方式

> 作者：梁又文  
> QQ：794234293  
> 微信：gdgzyw

## 贡献代码