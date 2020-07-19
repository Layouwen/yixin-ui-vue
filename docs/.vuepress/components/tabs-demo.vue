<template>
  <div>
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
  </div>
</template>

<script>
  import Tabs from '../../../src/tabs'
  import tabsHead from '../../../src/tabs-head'
  import tabsBody from '../../../src/tabs-body'
  import tabsItem from '../../../src/tabs-item'
  import tabsPane from '../../../src/tabs-pane'
  export default {
    name: "tabs-demo",
    data(){
      return {
        tabs:'one',
      }
    },
    components:{
      'yx-tabs':Tabs,
      'yx-tabs-head':tabsHead,
      'yx-tabs-body':tabsBody,
      'yx-tabs-item':tabsItem,
      'yx-tabs-pane':tabsPane
    },
  }
</script>