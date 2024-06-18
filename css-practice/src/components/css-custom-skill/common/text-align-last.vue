<template>
  <div class="list">
    <p>
      <strong> 文本两端对齐 </strong>
    </p>

    <div class="text-align">
      <div>第1</div>
      <div>我是张三</div>
      <div>我是李四</div>
      <div>我是王五</div>
      <div>他是钱六</div>
      <div>你啥也不是</div>
    </div>

  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
  name: 'text-align-last',


})
</script>
<style lang="less" scoped>
.list {
  position: relative;
  width: 800px;
  color: #fff;

  p {
    cursor: pointer;
    line-height: 2.2vmin;
    font-size: 2vmin;
    color: #fff;

    strong {
      display: inline-block;
      margin: 0 3px;
      border-radius: 5px;
      line-height: 20px;
      color: #fff;

      .span {
        color: #fff;
        font-size: 1.8vmin;
      }
    }
  }

  .text-align {
    width: 200px;
    font-size: 16px;

    div {
      width: 100%;
      height: 40px;
      background-color: rgba(171, 130, 215, 0.78);
      margin-top: 5px;
      text-align-last: justify;
    }
  }

}
</style>