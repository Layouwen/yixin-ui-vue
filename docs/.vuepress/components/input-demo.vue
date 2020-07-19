<template>
  <div>
    <yx-input value="默认输"></yx-input>
    <yx-input value="禁用1" disabled></yx-input>
    <yx-input value="禁用2" readonly></yx-input>
    <yx-input value="111" error="用户名过短"></yx-input>
  </div>
</template>

<script>
  import Input from '../../../src/input'
  export default {
    name: "input-demo",
    components:{
      'yx-input':Input,
    }
  }
</script>