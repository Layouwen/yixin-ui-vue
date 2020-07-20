# Toast 提示框

## 基础用法

<ClientOnly>
<toast-demo1></toast-demo1>
</ClientOnly>

```html
<yx-button class="toast"  @click="showToast1">顶部提示</yx-button>
<yx-button class="toast" @click="showToast2">中间提示</yx-button>
<yx-button class="toast" @click="showToast3">底部提示</yx-button>
```

```js
showToast1(){ this.$toast('这是消息体A',{ position:'top' }) },
showToast2(){ this.$toast('这是消息体B',{ position:'middle' }) },
showToast3(){
//$toast第一个参数可以是字符串也可以是html
this.$toast('这是消息体C',{
    position:'bottom',
    enableHtml:true,
    autoClose:2,
})
````

## 确认后消失

<ClientOnly>
<toast-demo2></toast-demo2>
</ClientOnly>

```html
<yx-button class="toast" @click="showToast2">Toast</yx-button>
```

```js
methods:{
  showToast(){
    this.$toast('这是消息体B',{
      position:'middle',
      autoClose:false,
      closeButton:{
        text:'关闭',
        callback:(toast)=>{
          this.log(); //组件外部函数
          //toast.log() //组件内部函数
        },
      }
    })
  },
  log(){
    alert('调用了组件外部的函数')
  }
}
```
