<template>
  <!-- 绘制正方体 -->
  <div class="list">
    <div class="small-title">
      <strong> 10.绘制正方体</strong>
      <!--      <p>实现思路：</p>-->
      <p>

      </p>
    </div>
    <!-- 绘制正方体 -->
    <div class="cube-box">
      <div class="cube">
        <!--前面 -->
        <div class="front"></div>
        <!--后面 -->
        <div class="back"></div>
        <!--左面 -->
        <div class="left"></div>
        <!--右面 -->
        <div class="right"></div>
        <!--上面 -->
        <div class="top"></div>
        <!--下面 -->
        <div class="bottom"></div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
export default {
  name: "cube-box"
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


  /* 绘制正方体*/

  .cube-box {
    margin: 120px;

    .cube {
      width: 200px;
      height: 200px;
      /**preserve-3d:子元素将保留其 3D 位置。  | flat:子元素将不保留其 3D 位置。 **/
      transform-style: preserve-3d;
      /** 有兴趣了解一下3d坐标系-三维变换-transform **/
      transform: rotateX(-30deg) rotateY(20deg);

      div {
        position: absolute;
        width: 200px;
        height: 200px;
        opacity: 0.5;
        transition: .4s;
      }

      .front {
        transform: rotateY(0deg) translateZ(100px);
        background: #a3daff;
      }

      .back {
        transform: translateZ(-100px) rotateY(180deg);
        background: #a3daff;
      }

      .left {
        transform: rotateY(-90deg) translateZ(100px);
        background: #1ec0ff;
        left: -20px;
      }

      .right {
        transform: rotateY(90deg) translateZ(100px);
        background: #1ec0ff;
        right: -20px;
      }

      .top {
        transform: rotateX(90deg) translateZ(100px);
        background: #0080ff;
        top: -20px;
      }

      .bottom {
        transform: rotateX(-90deg) translateZ(100px);
        background: #0080ff;
        bottom: -20px;
      }
    }


  }
}
</style>
