<template>
  <div class="css-layout-skill">
    <div class="button">
      <el-button type="primary" @click.stop="back">返回</el-button>
    </div>
    <h1 class="title">
      css 常见的布局技巧
    </h1>

  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
  name: "css-layout",
  components: {},
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

.css-layout-skill {
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