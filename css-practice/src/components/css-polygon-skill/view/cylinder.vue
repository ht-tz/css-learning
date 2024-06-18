<template>
  <!-- 圆柱体 -->
  <div class="list">
    <div class="small-title">
      <strong> 11.圆柱体</strong>
      <!--      <p>实现思路：</p>-->
      <p>

      </p>
    </div>
    <!-- 圆柱体 -->
    <div class="cylinder-box">

        <div class="ellipse"></div>
        <div class="rectangle"></div>

    </div>

  </div>
</template>

<script lang="ts">
export default {
  name: "cylinder-box"
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


  /* 圆柱体*/

  .cylinder-box {
    margin: 120px;
    position: relative;
    transform: rotateX(70deg);
    .ellipse {
      width: 100px;
      height: 80px;
      background: deepskyblue;
      border-radius: 50px;
    }

    .rectangle {

      width: 100px;
      height: 600px;
      position: absolute;
      opacity: 0.6;
      background: deepskyblue;
      background-image: linear-gradient(to right, rgba(255, 255, 255, 0.2) 0, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.2) 100%);

      top: 0;
      left: 0;
      border-radius: 100px;
      z-index: -1;
    }

  }
}
</style>
