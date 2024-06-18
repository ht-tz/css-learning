<template>
  <div class="typing">
    <div class="small-title">
      <strong>伪元素加平移变化实现自定义提示框</strong>
      <p>实现思路：</p>
      <ul>
        <li>1.hover操作时,透明度为1</li>
        <li>2.hover操作结束时,透明度为0</li>
        <li>3.指向三角绘制:先绘制正方形旋转45reg,
          使上半部份与tooltip内容边框重叠,就实现了视觉上的小三角形
        </li>
      </ul>
    </div>
    <!-- 自定义提示框体实现 -->
    <div class="type-box">
    </div>
  </div>
</template>
<script>
import {defineComponent} from 'vue'

export default defineComponent({
  setup() {

  },
})
</script>

<style lang="less" scoped>
.typing {
  position: relative;
  width: 800px;
  color: #fff;
  margin-top: 40px;

  div {
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
}
</style>
