<template>
  <!--  绘制心形 -->
  <div class="list">
    <div class="small-title">
      <strong> 8. 绘制心形</strong>
      <!--      <p>实现思路：</p>-->
      <p>

      </p>
    </div>
    <!-- 绘制前准备 -->
    <div class="heart-ex"></div>

    <!-- 绘制圆形 -->
    <div class="heart-box">
      <div class="heart"></div>
    </div>

  </div>
</template>

<script lang="ts">
export default {
  name: "heartBox"
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



  .heart-ex {
    margin-top: 200px;
    width: 100px;
    height: 100px;
    transform: rotateZ(45deg);
    background: #70db46;
  }

  .heart-ex::after,
  .heart-ex::before {
    content: "";
    width: 100%;
    height: 100%;
    border-radius: 50%;
    display: block;
    background: #e8ce3f;
    position: absolute;
    top: -200%;
    left: 0;
  }

  .heart-ex::before {
    top: 0;
    left: -200%;
    background: #10c06e;
  }


  .heart-box {
    margin-top: 250px;
    .heart {
      margin-top: 200px;
      width: 100px;
      height: 100px;
      //z轴旋转45度变为菱形
      transform: rotateZ(45deg);
      background: #70db46;
    }

    .heart::after,
    .heart::before {
      content: "";
      width: 100%;
      height: 100%;
      border-radius: 50%;
      display: block;
      background: #e8ce3f;
      position: absolute;
      top: -50%;
      left: 0;
    }

    .heart::before {
      top: 0;
      left: -50%;
      background: #10c06e;
    }
  }




}
</style>
