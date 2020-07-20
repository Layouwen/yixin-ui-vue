# Layout 布局

## 布局一

<ClientOnly>
<layout-demo1></layout-demo1>
</ClientOnly>

```html
<yx-layout class="layout">
    <yx-header class="header">header</yx-header>
    <yx-content class="content">content</yx-content>
    <yx-footer class="footer">footer</yx-footer>
</yx-layout>
```

## 布局二

<ClientOnly>
<layout-demo2></layout-demo2>
</ClientOnly>

```html
<yx-layout class="layout">
    <yx-header class="header">header</yx-header>
    <yx-layout>
        <yx-sider class="sider">sider</yx-sider>
        <yx-content class="content">content</yx-content>
    </yx-layout>
    <yx-footer class="footer">footer</yx-footer>
</yx-layout>
```

## 布局三

<ClientOnly>
<layout-demo3></layout-demo3>
</ClientOnly>

```html
<yx-layout class="layout">
    <yx-sider class="sider">sider</yx-sider>
    <yx-layout>
        <yx-header class="header">header</yx-header>
        <yx-content class="content">content</yx-content>
        <yx-footer class="footer">footer</yx-footer>
    </yx-layout>
</yx-layout>
```