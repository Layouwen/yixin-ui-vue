<template>
  <div>
    <br>
    <img src="https://i.loli.net/2018/10/26/5bd2d58ea4a00.png">
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
      'yx-layout':Layout,
      'yx-header':Header,
      'yx-content':Content,
      'yx-footer':Footer,
      'yx-sider':Sider,
    }
  }
</script>

<style scoped lang="scss">

  .layout{color: white;}
  .header{height: 40px; background:#40a9ff;text-align: center;line-height: 40px;}
  .content{height: 50px; background:#096dd9;text-align: center;line-height: 50px;width:69%; margin:0}
  .footer{height: 40px; background:#40a9ff;text-align: center;line-height: 40px;}
  .sider{height: 114px; background:#1890ff;text-align: center;line-height: 114px;width:29%;margin:0}
</style>