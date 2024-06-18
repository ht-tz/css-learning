<template>
  <div class="standard">
    <h1 class="title">
      css属性规范参考
    </h1>

    <div @click.stop="linkToUrl(1)" class="link">css 属性参考规范一</div>
    <div @click.stop="linkToUrl(2)" class="link">css 属性参考规范二</div>

  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'index',
  props: {},
  emits: ['back'],
  setup: (props, ctx) => {
    // const orderImg  = '';
    /**
     * @description 点击菜单
     * @method clickItem
     * @param value
     */
    const back = (): void => {
      ctx.emit('back', true);
    }


    const linkToUrl = (value): void => {
      let url1 = 'https://juejin.cn/post/6886348996990730253';
      let url2 = 'https://www.zhihu.com/question/19586885/answer/48933504';
      if (value === 1) {
        window.open(url1)
      } else {
        window.open(url2)
      }
    }

    return {
      // orderImg,
      back,
      linkToUrl
    }
  }
})
</script>

<style lang="less" scoped>
.standard {
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  background-color: #282c34;

  .button {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  .title {
    background-image: linear-gradient(92deg, #f66 0%, #f90 100%);
    -webkit-background-clip: text;
    //background-clip: text; /*不生效*/
    color: #f66;
    animation: hue 5s infinite linear;
    -webkit-text-fill-color: transparent;
  }

  p {
    cursor: pointer;
    line-height: 1.5vmin;
    font-size: 2vmin;
    color: #fff;

    strong {
      display: inline-block;
      margin: 0 3px;
      padding: 0 6px;
      border-radius: 5px;
      line-height: 20px;
      color: #fff;

      .span {
        color: #fff;
        font-size: 1.5vmin;
      }
    }
  }

  .link {
    color: #f66;
    font-size: 1.8vmin;
    cursor: pointer;
    background-image: linear-gradient(92deg, #f66 0%, #f90 100%);
    -webkit-background-clip: text;
    animation: hue 5s infinite linear;
    -webkit-text-fill-color: transparent;

    //display: none;
  }

  .link :hover {
    display: block;
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
}
</style>