a<template>
  <!-- 绘制椭圆 -->
  <div class="list">
    <div class="small-title">
      <strong> 6.绘制半圆</strong>
      <!--      <p>实现思路：</p>-->
      <p>

      </p>
    </div>
    <!-- 绘制半圆 -->
    <div class="half-circle-box">
      <div class="half-circle"></div>
    </div>

  </div>
</template>

<script lang="ts">
export default {
  name: "half-circle",
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


  /* 半圆*/
  .half-circle-box {
    margin: 50px;

    .half-circle {
      width: 100px;
      height: 200px;
      /*  "/"前四个值表示圆角的水平半径，后四个值表示圆角的垂直半径*/
      //border-radius: 200% 0 0 200% / 100% 0 0 100%;
      /* 效果和用%一样 左上角，右上角，右下角，左下角 */
      border-radius: 100px 0 0 100px;
      background: #e382ba;
    }


  }
}
</style>