<template>
  <div class="list">
    <p>
      <strong>文字-效果展示</strong>
    </p>
    <div class="text1" v-if="!isMask" :class="bg[isShowBg]">
      君不见黄河之水天上来，奔流到海不复还
    </div>

    <!--    <div class="text1" v-if="isMask"  >-->
    <!--      君不见黄河之水天上来，奔流到海不复还-->
    <!--    </div>-->

    <el-row class="row">
      <el-button size="mini" type="info" @click.stop="changeBg(1)">
        颜色渐变</el-button
      >
      <el-button size="mini" type="info" @click.stop="changeBg(2)">
        彩色渐变</el-button
      >
      <el-button size="mini" type="info" @click.stop="changeBg(3)">
        字体流光</el-button
      >
      <el-button size="mini" type="info" @click.stop="changeBg(4)">
        文字外发光</el-button
      >
      <el-button size="mini" type="info" @click.stop="changeBg(5)">
        文字霓虹灯</el-button
      >
      <el-button size="mini" type="info" @click.stop="changeBg(6)">
        文字下划线</el-button
      >
      <el-button size="mini" type="info" @click.stop="changeBg(7)">
        文字下滑线距离</el-button
      >
      <el-button size="mini" type="info" @click.stop="changeBg(8)">
        文字阴影</el-button
      >
      <!--      <el-button size="mini" type="info" @click.stop="changeBg(9)"> 文字遮罩</el-button>-->
    </el-row>
    <!-- 文字处理特效参考链接 -->
    <!--    <a href="https://juejin.cn/post/6937102296442470413#heading-9"></a>-->
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "text-gradual-change",
  setup: (props, ctx) => {
    //文字特效style
    const bg: Object = {
      1: "text-double-color",
      2: "text-more-color",
      3: "text-flow-light",
      4: "text-border-light",
      5: "light",
      6: "text-line",
      7: "text-line-border",
      8: "text-shadow",
      9: "text-mask",
    };
    //初始化背景
    const isShowBg = ref(0);
    //展示流光文字
    const isLight = ref(false);
    const isMask = ref(false);
    /**
     * @description 改变字体颜色背景
     * @method changBg
     * @param value true/false
     */
    const changeBg = (value: string | number) => {
      if (value === 9) {
        isMask.value = false;
      } else {
        isShowBg.value = value;
      }
    };

    return {
      //定义属性
      isShowBg,
      isLight,
      isMask,
      bg,
      //事件
      changeBg,
    };
  },
});
</script>

<style lang="less" scoped>
.title-font () {
  background-image: linear-gradient(92deg, #f66 0%, #f90 100%);
  -webkit-background-clip: text;
  //background-clip: text; /*不生效*/
  color: transparent;
  animation: hue 5s infinite linear;
}

.list {
  position: relative;
  width: 800px;
  color: #fff;

  p {
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

  .row {
    padding: 20px 0px 20px 0px;
  }

  /*** 文字特效处理start ***/

  .text-double-color {
    font-size: 40px;
    /*  第一步：文字变为透明  */
    color: transparent;
    /* 第二步：背景渐变 */
    background: linear-gradient(
      45deg,
      rgba(0, 173, 181, 1) 0%,
      rgba(0, 173, 181, 0.4) 100%
    );
    /*第三步：以盒子内的文字作为裁剪区域向外裁剪，文字之外的区域都将被裁剪掉*/
    -webkit-background-clip: text;
  }

  .text-more-color {
    font-size: 40px;
    /*  第一步：文字变为透明  */
    color: transparent;
    /* 第二步：背景渐变 */
    background-image: linear-gradient(
      45deg,
      #0066ff 0%,
      #3366ff 50%,
      #cc66ff 75%,
      #ff00ff 100%
    );
    /*第三步：以盒子内的文字作为裁剪区域向外裁剪，文字之外的区域都将被裁剪掉*/
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .text-flow-light {
    font-size: 40px;
    font-weight: bold;
    /*  第一步：文字变为透明  */
    color: #f66;
    /* 第二步：背景渐变 */
    background-image: linear-gradient(45deg, #ff00ff 0%, #0066ff 100%);
    background-size: 200% 100%;
    /*第三步：以盒子内的文字作为裁剪区域向外裁剪，文字之外的区域都将被裁剪掉*/
    -webkit-background-clip: text;
    /* animation 动画 */
    animation: hue 4s infinite linear;
  }

  .text-border-light {
    font-size: 40px;
    line-height: 60px;
    color: #fff;
    /* h-shadow	必需。水平阴影的位置。允许负值。v-shadow	必需。垂直阴影的位置。允许负值。blur	可选。模糊的距离。 */
    /*以下写法是多重阴影写法*/
    text-shadow: 0 0 0.1em, 0 0 0.3em, 0 0 0.1em, 0 0 0.1em;
  }

  /* 霓虹灯效果 */

  .light {
    font-size: 40px;
    line-height: 60px;
    background-color: #03e9f4;
    color: #050801;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
      0 0 200px #03e9f4;
  }

  .text-line {
    font-size: 40px;
    line-height: 60px;
    color: rgba(0, 173, 181, 0.4);
    /*这样可以实现下划线，但是不能调整下划线的距离*/
    text-decoration: underline;
  }

  .text-line-border {
    /* 调整宽度 */
    width: 90%;
    font-size: 40px;
    line-height: 60px;
    color: rgba(0, 173, 181, 0.4);
    /* 实现下滑线与文字的距离 */
    border-bottom: 1px solid #03e9f4;
    padding-bottom: 5px;
  }

  /* 文字阴影 */

  .text-shadow {
    font-size: 40px;
    line-height: 60px;
    color: #00adb5;
    text-shadow: 1px 1px rgba(0, 173, 181, 0.2882),
      2px 2px rgba(0, 173, 181, 0.2882), 3px 3px rgba(0, 173, 181, 0.2882),
      4px 4px rgba(0, 173, 181, 0.2882);
  }

  /* 文字遮罩 */

  .text-mask {
    font-size: 40px;
    line-height: 60px;
    mask: radial-gradient(circle at 50% 0%, #000, transparent 30%);
    animation: scale 6s infinite;
  }

  /*** 文字特效处理 end ***/
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

/* 文字高光 */
@keyframes shine {
  0% {
    background-position: 50% 0;
  }
  100% {
    background-position: -190% 0;
  }
}

/* 文字遮罩缩放 */
@keyframes scale {
  0% {
    mask-size: 100% 100%;
  }
  60%,
  100% {
    mask-size: 150% 800%;
  }
}
</style>