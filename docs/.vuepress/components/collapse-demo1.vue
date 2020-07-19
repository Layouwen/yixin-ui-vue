<template>
  <div>
    <br>
    <yx-collapse :selected.sync="tabs">
      <yx-collapse-item title="标题1" name="one">内容1</yx-collapse-item>
      <yx-collapse-item title="标题2" name="two">内容2</yx-collapse-item>
      <yx-collapse-item title="标题3"  name="three">内容3</yx-collapse-item>
    </yx-collapse>
  </div>
</template>

<script>
  import Collapse from '../../../src/collapse'
  import collapseItem from '../../../src/collapse-item'

  export default {
    name: "collapse-demo1",
    data(){
      return{
        tabs:['one','two'],
      }
    },
    components:{
      'yx-collapse':Collapse,
      'yx-collapse-item':collapseItem
    }
  }
</script>

<style scoped lang="scss">

</style>