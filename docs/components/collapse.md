# Collapse 折叠面板

## 默认展开

<ClientOnly>
<collapse-demo1></collapse-demo1>
</ClientOnly>

```html
<yx-collapse :selected.sync="tabs">
  <yx-collapse-item title="标题1" name="one">内容1</yx-collapse-item>
  <yx-collapse-item title="标题2" name="two">内容2</yx-collapse-item>
  <yx-collapse-item title="标题3"  name="three">内容3</yx-collapse-item>
</yx-collapse>
```

```js
data(){
  return{
    tabs:['one','two'],
  }
},
```

## 单选面板

<ClientOnly>
<collapse-demo2></collapse-demo2>
</ClientOnly>

```html
<xy-collapse :selected.sync="tabs" single >
  <yx-collapse-item title="标题1" name="one">这是内容</yx-collapse-item>
  <yx-collapse-item title="标题2" name="two">这是内容</yx-collapse-item>
  <yx-collapse-item title="标题3"  name="three">这是内容</yx-collapse-item>
</xy-collapse>
```

```js
data(){
  return{
    tabs:['two'],
  }
},
```