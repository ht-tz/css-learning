<template>
  <!--  菱形-绘制菱形 -->
  <div class="list">
    <div class="small-title">
      <strong> 7. 菱形-绘制菱形</strong>
      <!--      <p>实现思路：</p>-->
      <p>

      </p>
    </div>
    <!-- 绘制圆形 -->
    <div class="rhombus-box">
      <div class="rhombus"></div>
    </div>

  </div>
</template>

<script lang="ts">
export default {
  name: "rhomb-box"
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


  /*  菱形-绘制菱形*/

  .rhombus-box {
    margin-top: 150px;
    margin-bottom: 50px;

    .rhombus {
      width: 100px;
      height: 100px;
      /* 通过旋转的的菱形 */
      transform: rotateZ(45deg) skew(30deg, 30deg);
      background: #1c85d8;
    }

  }
}
</style>
