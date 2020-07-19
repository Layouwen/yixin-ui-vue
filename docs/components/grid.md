# Grid 网格

通过基础的 24 分栏，迅速简便地创建布局。

## 基础用法

使用单一分栏创建基础的栅格布局。

<grid-demo1></grid-demo1>

## 代码

```html
<yx-row class="demoRow">
    <yx-col span="8">
      <div class="demoCol">8</div>
    </yx-col>
    <yx-col span="8">
      <div class="demoCol">8</div>
    </yx-col>
    <yx-col span="8">
      <div class="demoCol">8</div>
    </yx-col>
  </yx-row>
  <yx-row class="demoRow">
    <yx-col span="6">
      <div class="demoCol">6</div>
    </yx-col>
    <yx-col span="6">
      <div class="demoCol">6</div>
    </yx-col>
    <yx-col span="6">
      <div class="demoCol">6</div>
    </yx-col>
    <yx-col span="6">
      <div class="demoCol">6</div>
    </yx-col>
  </yx-row>
  <yx-row class="demoRow">
    <yx-col span="4">
      <div class="demoCol">4</div>
    </yx-col>
    <yx-col span="4">
      <div class="demoCol">4</div>
    </yx-col>
    <yx-col span="4">
      <div class="demoCol">4</div>
    </yx-col>
    <yx-col span="4">
      <div class="demoCol">4</div>
    </yx-col>
    <yx-col span="4">
      <div class="demoCol">4</div>
    </yx-col>
    <yx-col span="4">
      <div class="demoCol">4</div>
    </yx-col>
  </yx-row>
  <yx-row class="demoRow">
    <yx-col span="2">
      <div class="demoCol">2</div>
    </yx-col>
    <yx-col span="2">
      <div class="demoCol">2</div>
    </yx-col>
    <yx-col span="2">
      <div class="demoCol">2</div>
    </yx-col>
    <yx-col span="2">
      <div class="demoCol">2</div>
    </yx-col>
    <yx-col span="2">
      <div class="demoCol">2</div>
    </yx-col>
    <yx-col span="2">
      <div class="demoCol">2</div>
    </yx-col>
    <yx-col span="2">
      <div class="demoCol">2</div>
    </yx-col>
    <yx-col span="2">
      <div class="demoCol">2</div>
    </yx-col>
    <yx-col span="2">
      <div class="demoCol">2</div>
    </yx-col>
    <yx-col span="2">
      <div class="demoCol">2</div>
    </yx-col>
    <yx-col span="2">
      <div class="demoCol">2</div>
    </yx-col>
    <yx-col span="2">
      <div class="demoCol">2</div>
    </yx-col>
  </yx-row>
```

## 设置 gutter

<grid-demo2></grid-demo2>

```html
<yx-row class="demoRow" gutter="10">
    <yx-col span="8">
      <div class="demoCol">8</div>
    </yx-col>
    <yx-col span="8">
      <div class="demoCol">8</div>
    </yx-col>
    <yx-col span="8">
      <div class="demoCol">8</div>
    </yx-col>
</yx-row>

<yx-row class="demoRow" gutter="10">
    <yx-col span="6">
      <div class="demoCol">6</div>
    </yx-col>
    <yx-col span="6">
      <div class="demoCol">6</div>
    </yx-col>
    <yx-col span="6">
      <div class="demoCol">6</div>
    </yx-col>
    <yx-col span="6">
      <div class="demoCol">6</div>
    </yx-col>
</yx-row>
```

## 设置 offset

<grid-demo3></grid-demo3>

```html
<yx-row class="demoRow" gutter="10">
  <yx-col span="8">
    <div class="demoCol">8</div>
  </yx-col>
  <yx-col span="8" offset="8">
    <div class="demoCol">8</div>
  </yx-col>
</yx-row>

<yx-row class="demoRow" gutter="10">
  <yx-col span="6" offset="6">
    <div class="demoCol">6</div>
  </yx-col>
  <yx-col span="6" offset="6">
    <div class="demoCol">6</div>
  </yx-col>
</yx-row>

<yx-row class="demoRow" gutter="10">
  <yx-col span="4">
    <div class="demoCol">4</div>
  </yx-col>
  <yx-col span="4" offset="4">
    <div class="demoCol">4</div>
  </yx-col>
  <yx-col span="4" offset="8">
    <div class="demoCol">4</div>
  </yx-col>
</yx-row>

<yx-row class="demoRow" gutter="10">
  <yx-col span="2">
    <div class="demoCol">2</div>
  </yx-col>
  <yx-col span="2" offset="2">
    <div class="demoCol">2</div>
  </yx-col>
  <yx-col span="2">
    <div class="demoCol">2</div>
  </yx-col>
  <yx-col span="2" offset="2">
    <div class="demoCol">2</div>
  </yx-col>
  <yx-col span="2">
    <div class="demoCol">2</div>
  </yx-col>
  <yx-col span="2" offset="2">
    <div class="demoCol">2</div>
  </yx-col>
  <yx-col span="2">
    <div class="demoCol">2</div>
  </yx-col>
  <yx-col span="2" offset="2">
    <div class="demoCol">2</div>
  </yx-col>
</yx-row>
```