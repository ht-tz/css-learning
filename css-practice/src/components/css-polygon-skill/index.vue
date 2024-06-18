<template>
  <div class="polygon-draw-skill">
    <div class="button">
      <el-button type="primary" @click.stop="back">返回</el-button>
    </div>
    <h1 class="title">
      css常见多边形绘制技巧
    </h1>

    <!-- 三角形 -->
    <triangle></triangle>
    <!-- 梯形 -->
    <trapezoid></trapezoid>
    <!-- 圆形 -->
    <drawcircle></drawcircle>
    <!-- 球形 -->
    <ball></ball>
    <!-- 椭圆 -->
    <ellipsebox></ellipsebox>
    <!-- 半圆 -->
    <halfCircle></halfCircle>
    <!-- 菱形 -->
    <rhombbox></rhombbox>
    <!-- 心形 -->
    <heartBox></heartBox>
    <!-- 切角 -->
    <cutCorner></cutCorner>
    <!-- 正方体 -->
    <cubeBox></cubeBox>
    <!--  圆柱体  -->
    <cylinderBox></cylinderBox>
    <!--  旋转得正方体  -->
    <cubeNumber></cubeNumber>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

//三角形
import triangle from "./view/triangle.vue";
//梯形
import trapezoid from "./view/trapezoid.vue"
//圆形
import drawcircle from "./view/drawcircle.vue"
//球
import ball from "./view/ball.vue"
//椭圆
import ellipsebox from "./view/ellipse.vue";
//半圆
import halfCircle from "./view/half-circle.vue"
//菱形
import rhombbox from "./view/rhomb.vue"
//绘制心形
import heartBox from "./view/heartBox.vue"
//切角
import cutCorner from "./view/cut-corner.vue"
//正方体
import cubeBox from "./view/cube.vue"
//圆柱体
import cylinderBox from "./view/cylinder.vue";
//旋转得正方体
import cubeNumber from "./view/cube-number.vue"
export default defineComponent({
  name: "css-polygon-skill",
  components: {
    triangle,
    trapezoid,
    drawcircle,
    ball,
    ellipsebox,
    halfCircle,
    rhombbox,
    heartBox,
    cutCorner,
    cubeBox,
    cylinderBox,
    cubeNumber
  },
  setup: (props, ctx) => {
    //列表参数
    const data: Array = [];

    /**
     * @description 返回菜单列表
     * @method back
     */
    const back = () => {
      ctx.emit('back', true);
    }
    return {
      data,
      back
    }
  }
})
</script>
<style lang="less" scoped>
@title-font : {
  background-image: linear-gradient(92deg, #f66 0%, #f90 100%);
  -webkit-background-clip: text;
  //background-clip: text; /*不生效*/
  color: #f66;
  animation: hue 5s infinite linear;
  -webkit-text-fill-color: transparent;
}

.polygon-draw-skill {
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: auto;
  background-color: #282c34;

  .button {
    position: absolute;
    top: 30px;
    right: 30px;
  }

  .title {
    @title-font()
  }
}


/*色调滤镜旋转 0-360*/
@keyframes hue {
  from {
    filter: hue-rotate(0);
  }
  to {
    filter: hue-rotate(-360deg);
  }
}


</style>