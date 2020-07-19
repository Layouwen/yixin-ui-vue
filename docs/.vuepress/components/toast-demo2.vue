<template>
  <div>
    <br>
    <x-button class="toast" @click="showToast">Toast</x-button>
  </div>
</template>
<style scoped>
  * {
    box-sizing: border-box;
  }
</style>
<script>
  import plugin from '../../../src/plugin'
  import Button from '../../../src/button'
  import Vue from 'vue'
  Vue.use(plugin);

  export default {
    components: {
      'x-button':Button
    },
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
  }
</script>