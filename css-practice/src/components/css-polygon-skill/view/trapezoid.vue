<template>
  <!-- 绘制等腰梯形 -->
  <div class="list">
    <div class="small-title">
      <strong> 2.绘制等腰梯形</strong>
<!--      <p>实现思路：</p>-->
      <p>

      </p>
    </div>
    <!-- 绘制等腰梯形 -->
    <div class="trapezoid-box">
      <div class="trapezoid"></div>
    </div>

  </div>
</template>

<script lang="ts">
export default {
  name: "trapezoid"
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

  /* 绘制梯形*/
  .trapezoid-box {
    .trapezoid {
      width: 200px;
      height: 200px;
      border: 100px solid #7a1ccd;
      border-color: transparent transparent #7a1ccd transparent;
      box-sizing: content-box;
    }


  }
}
</style>