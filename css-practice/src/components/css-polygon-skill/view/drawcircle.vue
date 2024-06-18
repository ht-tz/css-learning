<template>
  <!-- 绘制圆形 -->
  <div class="list">
    <div class="small-title">
      <strong> 3.绘制圆形</strong>
      <!--      <p>实现思路：</p>-->
      <p>

      </p>
    </div>
    <!-- 绘制圆形 -->
    <div class="circle-box">
      <div class="circle"></div>
    </div>

  </div>
</template>

<script lang="ts">
export default {
  name: "circle"
};
</script>

<style lang="less" scoped>
.list {
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


  /* 绘制圆形*/
    .circle-box {
      margin: 50px;
      .circle {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background: #9757a0;
      }

    }
}
</style>