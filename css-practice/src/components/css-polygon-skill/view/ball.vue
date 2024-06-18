<template>
  <!-- 绘制圆形 -->
  <div class="list">
    <div class="small-title">
      <strong> 4.绘制球</strong>
      <!--      <p>实现思路：</p>-->
      <p>

      </p>
    </div>
    <!-- 绘制圆形 -->
    <div class="ball-box">
      <div class="ball"></div>
    </div>

  </div>
</template>

<script lang="ts">
export default {
  name: "ball"
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
  .ball-box {
    margin: 50px;

      .ball {
        height: 200px;
        width: 200px;
        border-radius: 50%;
        /* 径向渐变 */
        background: radial-gradient(circle at 70px 70px, #1896bd, #0a0909);
      }


  }
}
</style>