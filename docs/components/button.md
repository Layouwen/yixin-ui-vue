# Button 按钮

常用的操作按钮

## 基础用法

分别为 普通按钮、图标按钮、加载中按钮、禁用按钮、组合按钮

<ClientOnly>
    <button-demo></button-demo>
</ClientOnly>

## 代码

```html
<yx-button>默认按钮</yx-button>
<yx-button icon="settings" icon-position="right">图标按钮</yx-button>
<yx-button :loading="isLoading" @click="isLoading=!isLoading">加载按钮</yx-button>
<yx-button disabled>禁用按钮</yx-button>

<yx-button-group>
  <yx-button icon="left">上一页</yx-button>
  <yx-button icon="right" icon-position="right">下一页</yx-button>
</yx-button-group>
```

```js
data() {
  return {
    isLoading: true,
  }
}
```