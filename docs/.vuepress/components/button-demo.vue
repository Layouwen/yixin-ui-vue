<template>
  <div>
    <yx-button>默认按钮</yx-button>
    <yx-button icon="settings" icon-position="right">图标按钮</yx-button>
    <yx-button :loading="isLoading" @click="isLoading=!isLoading">加载按钮</yx-button>
    <yx-button disabled>禁用按钮</yx-button>

    <yx-button-group>
      <yx-button icon="left">上一页</yx-button>
      <yx-button icon="right" icon-position="right">下一页</yx-button>
    </yx-button-group>
  </div>
</template>

<script>
  import Button from '../../../src/button'
  import buttonGroup from '../../../src/button-group'

  export default {
    components: {
      'yx-button': Button,
      'yx-button-group': buttonGroup
    },
    data() {
      return {
        isLoading: true,
      }
    }
  }
</script>