# Tabs 标签页

## 基础用法

默认选择 选项1、禁用选项2、可选择选项3

<tabs-demo></tabs-demo>

## 代码

```html
<yx-tabs :selected="tabs">
  <yx-tabs-head>
    <yx-tabs-item name="one">选项1</yx-tabs-item>
    <yx-tabs-item name="two" disabled >选项2</yx-tabs-item>
    <yx-tabs-item name="three">选项3</yx-tabs-item>
  </yx-tabs-head>
  <yx-tabs-body>
    <yx-tabs-pane name="one">内容 1</yx-tabs-pane>
    <yx-tabs-pane name="two">内容 2</yx-tabs-pane>
    <yx-tabs-pane name="three">内容 3</yx-tabs-pane>
  </yx-tabs-body>
</yx-tabs>
```

```js
data(){
  return {
    tabs:'one',
  }
},
```