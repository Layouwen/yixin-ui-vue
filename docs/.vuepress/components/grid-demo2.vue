<template>
    <div>
      <br>
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
      <br>
    </div>
</template>

<script>
    import Row from '../../../src/row'
    import Col from '../../../src/col'

    export default {
        name: "grid-demo2",
        components: {
            "yx-col": Col,
            "yx-row": Row
        }
    }
</script>

<style scoped lang="scss">
  * {
    box-sizing: border-box;
  }
  .demoRow{
    margin: 10px 0;
  }
  .demoCol {
    height:50px;
    background:#40a9ff;
    color:white;
    border:1px solid #1890ff;
    text-align: center;
    line-height:50px;
    font-size:20px;
  }
</style>