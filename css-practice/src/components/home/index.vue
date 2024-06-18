<template>
  <div class="home-container">
    <h1>
      <span class="title">css相关技术分享</span>
    </h1>
    <p><strong class="vue">Pure CSS Skill</strong></p>
    <p @click.stop="l(1)">css 书写规范</p>
    <p @click.stop="clickItem(2)">css 常见文本列表处理技巧</p>
    <p @click.stop="clickItem(4)">css 伪类常用开发技巧</p>
    <p @click.stop="clickItem(5)">css 常见多边形绘制技巧</p>
    <p @click.stop="clickItem(6)">css 常见的布局技巧</p>
    <p @click.stop="clickItem(3)">css 特效分享</p>
    <p @click.stop="clickItem(4)">css 参考学习url</p>
  </div>
</template>

<script lang="ts">
import {ref, defineComponent} from 'vue'

export default defineComponent({
  name: 'home',
  props: {},
  emits: ['clickItem'],
  setup: (props, ctx) => {
    // const title: string = "css常用开发技巧分享"
    // const count: number = ref(0)

    /**
     * @description 点击菜单
     * @method clickItem
     * @param value
     */
    const clickItem = (value: number): void => {
      // 1. css书写规范
      // 2. css常用技巧
      // 3. css常见特效
      // 4. css学习url
      // 5. css 绘制多边形
      // 6. css常见的布局技巧
      //抛出事件
      ctx.emit('clickItem', value);
    }

    return {
      clickItem
    }
  }
})
</script>

<style lang="less" scoped>

.home-container {

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: auto;
  background-color: #282c34;
  //position: relative;
  //z-index: 0;
  //border-radius: 10px;
  //overflow: hidden;

  //&::before {
  //  content: '';
  //  position: absolute;
  //  z-index: -2;
  //  left: -50%;
  //  top: -50%;
  //  width: 200%;
  //  height: 200%;
  //  background-color: #1a232a;
  //  background-repeat: no-repeat;
  //  background-position: 0 0;
  //  background-image: conic-gradient(transparent, rgba(168, 239, 255, 1), transparent 30%);
  //  animation: rotate 5s linear infinite;
  //}
  //
  //
  //&::after {
  //  content: '';
  //  position: absolute;
  //  z-index: -1;
  //  left: 6px;
  //  top: 6px;
  //  width: calc(100% - 12px);
  //  height: calc(100% - 12px);
  //  background: #000;
  //  animation: opacityChange 5s infinite linear;
  //  border-radius: 5px;
  //}


  h1 {
    margin: 20px 0;
    font-size: 10vmin;

    .title {
      background-image: linear-gradient(92deg, #f66 0%, #f90 100%);
      -webkit-background-clip: text;
      //background-clip: text; /*不生效*/
      color: #f66;
      animation: hue 5s infinite linear;
      -webkit-text-fill-color: transparent;
    }
  }

  p {
    cursor: pointer;
    line-height: 1.5vmin;
    font-size: 2vmin;
    color: #ffffff;

    strong {
      display: inline-block;
      margin: 0 3px;
      padding: 0 6px;
      border-radius: 5px;
      line-height: 20px;
      color: #ffffff;

      .vue {
        background-color: #42b983;
      }

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

  /*  定义动画规则 */
  @keyframes opacityChange {
    0% {
      opacity: 0.60;
    }

    25% {
      opacity: 0.25;
    }
    50% {
      opacity: 0.5;
    }
    75% {
      opacity: 0.25;
    }
    100% {
      opacity: 0.60;
    }
  }

  @keyframes rotate {
    100% {
      transform: rotate(1turn);
    }
  }

}
</style>
