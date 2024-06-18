<template>
  <div class="standard">
    <h1 class="title">
      css书写规范
    </h1>
    <div class="list">
      <div class="list-text">
        <strong>1.定位属性:</strong>
        <blockquote>
          <p> position z-index left right top bottom clip等</p>
        </blockquote>
      </div>

      <div class="list-text">
        <strong>2.自身属性:</strong>
        <blockquote>
          <p> width height min-height max-height min-width max-width padding border margin background</p>
        </blockquote>
      </div>
      <div class="list-text">
        <strong>3.文字:</strong>
        <blockquote>
          <p> font-family、font-size、font-style、font-weight、font-varient、color</p>
        </blockquote>
      </div>
      <div class="list-text">
        <strong>4.文本属性:</strong>
        <blockquote>
          <p>
            text-align、vertical-align、text-wrap、text-transform、text-indent、text-decoration、letter-spacing、word-spacing、white-space、text-overflow</p>
        </blockquote>
      </div>
      <div class="list-text">
        <strong>5. CSS3 中新增属性:</strong>
        <blockquote>
          <p>content、box-shadow、border-radius、transform</p>
        </blockquote>
      </div>
    </div>

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


    const linkToUrl = (): void => {
      window.open('https://www.zhihu.com/question/19586885/answer/48933504')
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
@import "./less/index";
</style>