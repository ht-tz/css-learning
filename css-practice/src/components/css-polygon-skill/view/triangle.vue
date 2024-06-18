  <template>
  <!-- 绘制三角形 -->
  <div class="list">
    <div class="small-title">
      <strong> 1.绘制三角形</strong>
      <p>实现思路：</p>
      <p>

      </p>
      <!-- 伪类after实现的三角箭头 -->
      <div class="triangle-box">
        <div class="triangle1"></div>
        <!--        <div class="triangle1"></div>-->
        <!--        <div class="triangle2"></div>-->
        <!--        <div class="triangle3"></div>-->
        <!--        <div class="triangle4"></div>-->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "triangle"
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

  .box {
    padding: 15px;
    width: 100%;
    height: 100px;
    background-color: rgb(230, 212, 212);
    /* 属性渐变 */
    -webkit-transition: 0.1s;
    transition: 0.2s;

    &:hover {
      background-color: rgb(49, 48, 48);

      /* h-shadow水平值 , v-shadow 垂直阴影,blur 模糊距离,spread 阴影大小 ,color 阴影颜色, inset	可选。从外层的阴影（开始时）改变阴影内侧阴*/
      box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.8);
    }
  }

  /* 绘制三角形*/
  .triangle-box {
    .triangle1 {
      width: 0;
      height: 0;
      border: 200px solid #44ae78;
      /* 通过改变边框颜色，可以改变三角形的方向  上右下左  */
      border-color: #44ae78 #a7b36b #51b7c9 #3e416e;
    }

    //.triangle1 {
    //  width: 0;
    //  height: 0;
    //  border: 200px solid #44ae78;
    //  /* 通过改变边框颜色，可以改变三角形的方向  上右下左  */
    //  border-color: #44ae78 transparent transparent transparent;
    //}
    .triangle2 {
      width: 0;
      height: 0;
      border: 200px solid #a7b36b;
      /* 通过改变边框颜色，可以改变三角形的方向  上右下左  */
      border-color: transparent #a7b36b transparent transparent;
    }

    .triangle3 {
      width: 0;
      height: 0;
      border: 200px solid #51b7c9;
      /* 通过改变边框颜色，可以改变三角形的方向  上右下左  */
      border-color: transparent transparent #51b7c9 transparent;
    }

    .triangle4 {
      width: 0;
      height: 0;
      border: 200px solid #3e416e;
      /* 通过改变边框颜色，可以改变三角形的方向  上右下左  */
      border-color: transparent transparent transparent #3e416e;
    }
  }
}
</style>