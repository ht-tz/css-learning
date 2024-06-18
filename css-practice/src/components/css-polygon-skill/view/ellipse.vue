<template>
  <!-- 绘制椭圆 -->
  <div class="list">
    <div class="small-title">
      <strong> 5.绘制椭圆</strong>
      <!--      <p>实现思路：</p>-->
      <p>

      </p>
    </div>
    <!-- 绘制椭圆 -->
    <div class="ellipse-box">
      <div class="ellipse"></div>
    </div>

  </div>
</template>

<script lang="ts">
export default {
  name: "ellipse"
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


  /* 绘制椭圆*/
  .ellipse-box {
    margin: 50px;

    .ellipse {
      width: 200px;
      height: 100px;
      border-radius: 50%;
      background: #0a72de;
    }


  }
}
</style>