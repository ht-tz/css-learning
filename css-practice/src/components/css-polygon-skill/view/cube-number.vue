<template>
  <!-- 绘制旋转正方体 -->
  <div class="list">
    <div class="small-title">
      <strong> 12.绘制旋转正方体</strong>
      <!--      <p>实现思路：</p>-->
      <p>

      </p>
    </div>
    <!-- 绘制旋转正方体 -->
    <div class="cube-box">
      <div class="td-cube">
        <ul>
          <li class="front">1</li>
          <li class="back">2</li>
          <li class="top">3</li>
          <li class="bottom">4</li>
          <li class="left">5</li>
          <li class="right">6</li>
        </ul>
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


@width: 200px;
@height: 200px;
@length: 200px;
@all: 100px;

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

}

/* 绘制正方体*/
.cube-box {
  margin: 120px;

  .td-cube {
    width: @width;
    height: @height;
    /*  https://www.cnblogs.com/yanggeng/p/11285856.html 关于该属性可参考的地址 */
    perspective: 1000px;

    ul {
      list-style: none;
      position: relative;
      width: 100%;
      height: 100%;
      transform: rotateX(-15deg) rotateY(15deg);
      /*子元素将保留其 3D 位置。 */
      transform-style: preserve-3d;
      animation: rotate 5s infinite linear;
    }

    li {
      display: flex;
      position: absolute;
      justify-content: center;
      align-items: center;
      width: @width;
      height: @height;
      opacity: .8;
      font-size: 50px;
      color: #fff;
    }

    .front {
      background-color: #f66;
      transform: translateZ(@all);
    }

    .back {
      background-color: #66f;
      transform: rotateY(180deg) translateZ(@all);
    }

    .top {
      background-color: #f90;
      transform: rotateX(90deg) translateZ(@all);
    }

    .bottom {
      background-color: #09f;
      transform: rotateX(-90deg) translateZ(@all);
    }

    .left {
      background-color: #9c3;
      transform: rotateY(-90deg) translateZ(@all);
    }

    .right {
      background-color: #3c9;
      transform: rotateY(90deg) translateZ(@all);
    }
  }

}

@keyframes rotate {
  from {
    transform: rotateY(0) rotateX(0);
  }
  to {
    /*转圈*/
    transform: rotateY(-1turn) rotateX(-1turn);
  }
}

</style>
