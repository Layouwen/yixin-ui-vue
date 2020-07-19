<template>
  <div>
    <br>
    <img src="https://i.loli.net/2018/10/26/5bd2d5b0451a9.png" alt="">
  </div>
</template>

<script>
  import Layout from '../../../src/layout'
  import Header from '../../../src/header'
  import Content from '../../../src/content'
  import Footer from '../../../src/footer'
  import Sider from '../../../src/sider'

  export default {
    components:{
      'x-layout':Layout,
      'x-header':Header,
      'x-content':Content,
      'x-footer':Footer,
      'x-sider':Sider,
    }
  }
</script>

<style scoped lang="scss">
  .layout{color: white;}
  .header{height: 40px; background:#40a9ff;text-align: center;line-height: 40px;}
  .content{height: 80px; background:#096dd9;text-align: center;line-height: 80px;margin:0;}
  .footer{height: 40px; background:#40a9ff;text-align: center;line-height: 40px;}
  .sider{height: 224px; background:#1890ff;text-align: center;line-height: 224px;width:30%;}
</style>