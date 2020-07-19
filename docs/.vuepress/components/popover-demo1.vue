<template>
  <div class="wrapper">
    <br>
    <div class="block">
      <yx-popover trigger="click" position="left" class="popover">
        <yx-button>左边弹出</yx-button>
        <div slot="content">你好</div>
      </yx-popover>
      <yx-popover trigger="click" position="top" class="popover">
        <yx-button>上边弹出</yx-button>
        <div slot="content">你好</div>
      </yx-popover>
      <yx-popover trigger="click" position="bottom" class="popover">
        <yx-button>下边弹出</yx-button>
        <div slot="content">你好</div>
      </yx-popover>
      <yx-popover trigger="click" position="right" class="popover">
        <yx-button>右边弹出</yx-button>
        <div slot="content">你好</div>
      </yx-popover>
    </div>
  </div>
</template>

<script>
  import Popover from '../../../src/popover'
  import Button from '../../../src/button'
  export default {
    components: {
      'yx-popover': Popover,
      'yx-button': Button
    },
  }
</script>

<style scoped lang="scss">
  .wrapper{
    .popover{
      margin-left:20px;
    }
  }
</style>