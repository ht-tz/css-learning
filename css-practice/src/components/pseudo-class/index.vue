<template>
  <div class="pseudo-class">
    <div class="button">
      <el-button type="primary" @click.stop="back">返回</el-button>
    </div>
    <h1 class="title">
      css 伪类常用开发技巧
    </h1>
    <!-- 伪类元素实现边框阴影 -->
    <shadowbox></shadowbox>
    <!-- 使用伪类元素实现 -->
    <tootips></tootips>
    <!-- 使用伪类元素实现水印背景 -->
    <watermark></watermark>
    <!-- 伪类元素实现loading打点 -->
    <loading></loading>
    <chooseTheElement></chooseTheElement>
<!--    <textmindMap></textmindMap>-->
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import shadowbox from "./view/showbox.vue"
import tootips from "./view/tooltips.vue"
import watermark from "./view/watermark.vue"
import loading from "./view/Loading.vue"
import textmindMap from './view/textmindMap.vue'
import chooseTheElement from './view/chooseTheElement.vue'
export default defineComponent({
  name: "pseudo-class",
  components: {
    shadowbox,
    tootips,
    watermark,
    loading,
    chooseTheElement
    // textmindMap

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
.title-font () {
  background-image: linear-gradient(92deg, #f66 0%, #f90 100%);
  -webkit-background-clip: text;
  //background-clip: text; /*不生效*/
  color: #f66;
  animation: hue 5s infinite linear;
  -webkit-text-fill-color: transparent;
}

.pseudo-class {
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
    .title-font()
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