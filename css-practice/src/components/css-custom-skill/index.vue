<template>
  <div class="standard">
    <div class="button">
      <el-button type="primary" @click.stop="back">返回</el-button>
    </div>
    <h1 class="title">
      css 常用开发技巧-文本-列表处理
    </h1>

    <div class="list">

      <p>
        <strong>长文本超出换行</strong>
      </p>
      <div class="text-wrap">单行文本的测试数据--单行文本的测试数据---单行文本的测试数据--单行文本的测试数据--单行文本的测试数据---单行文本的测试数据</div>
      <ul>
        <li>word-break</li>
        <li>normal:使用默认断行规则</li>
        <li> break-all:对于非CJK(中日韩文字)文本，可在任意字符间断行</li>
        <li> keep-all:CJK文本不断行，非CJK文本表现同normal一样</li>
      </ul>
      <p>
        <strong>单行文本处理</strong>
      </p>
      <div class="single-text">单行文本的测试数据--单行文本的测试数据---单行文本的测试数据--单行文本的测试数据--单行文本的测试数据---单行文本的测试数据</div>

      <ul>
        <li>单行文本</li>
        <li>不换行：white-space: nowrap;</li>
        <li>超出隐藏： overflow: hidden;</li>
        <li>超出省略号显示： text-overflow: ellipsis;</li>
      </ul>

      <p>
        <strong>多行文本处理</strong>
      </p>
      <div class="more-text">
        文本的测试数据--文本的测试数据---文本的测试数据--文本的测试数据--文本的测试数据--文本的测试数据---文本的测试数据文本的测试数据--文本的测试数据---文本的测试数据--文本的测试数据--文本的测试数据--文本的测试数据---文本的测试数据单行文本的测试数据-文本的测试数据---单行文本的测试数据--单行文本的测试数据--单行文本的测试数据--单行文本的测试数据---单行文本的测试数据
      </div>

      <ul>
        <li>多行文本</li>
        <li>设置弹性伸缩盒子：
          display: -webkit-box;
        </li>
        <li>排列方式：
          -webkit-box-orient: vertical;
        </li>
        <li>指定行数：
          -webkit-line-clamp: 3;
        </li>
        <li>超出隐藏： overflow: hidden;</li>
        <li>换行： word-break: break-all;</li>
      </ul>

      <p>
        <strong>文本缩进</strong>
      </p>
      <div class="text-sj">
        文本的测试数据--文本的测试数据---文本的测试数据--文本的测试数据--文本的测试数据--文本的测试数据---文本的测试数据文本的测试数据--文本的测试数据---文本的测试数据--文本的测试数据--文本的测试数据--文本的测试数据---文本的测试数据单行文本的测试数据-文本的测试数据---单行文本的测试数据--单行文本的测试数据--单行文本的测试数据--单行文本的测试数据---单行文本的测试数据
      </div>


    </div>
    <!-- 文字渐变 -->
    <textGradualChange></textGradualChange>
    <!-- 对齐列表 -->
    <listAlignment></listAlignment>
    <!--  文字两端对齐  -->
    <textAlignLast></textAlignLast>
    <!--  图片自适应  -->
    <imgLayout></imgLayout>
  </div>
</template>
<script lang="ts">
import {ref, defineComponent} from 'vue'
import textGradualChange from './common/text-gradual-change.vue'
import listAlignment from './common/li-alignment.vue'

import textAlignLast from './common/text-align-last.vue'
import imgLayout from './common/img-layout.vue'

export default defineComponent({
  name: 'index',
  props: {},
  components: {
    textGradualChange,
    listAlignment,
    textAlignLast,
    imgLayout
  },
  emits: ['back'],
  setup: (props, ctx) => {
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
      back,
      linkToUrl
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


.standard {
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

    .text-wrap {
      width: 800px;
      word-break: break-all;
    }

    .single-text {
      width: 800px;
      /*超出宽度隐藏*/
      overflow: hidden;
      /*超出部分...显示*/
      text-overflow: ellipsis;
      /*不换行*/
      white-space: nowrap;
      word-break: break-all;
    }

    .more-text {
      width: 800px;
      max-width: 100%;
      /*重点，不能用block等其他，将对象作为弹性伸缩盒子模型显示*/
      display: -webkit-box;
      /*从上到下垂直排列子元素（设置伸缩盒子的子元素排列方式）*/
      -webkit-box-orient: vertical;
      /* 指定展示几行 */
      -webkit-line-clamp: 3;
      /** 指定文本展示几行 **/
      line-clamp: 3;
      word-break: break-all;
      overflow: hidden;
    }

    /* 文本缩进 块级元素使用 text-sj*/

    .text-sj {
      /* 缩进40排序 */
      text-indent: 40px;
      /** 字母与字母之间的间距 **/
      line-spacing: 3px;
      /** 行与行之间的距离 **/
      line-height: 40px;
    }

    //.text-sj {
    //  /* 内联元素使用margin-left */
    //  display: inline;
    //  margin-left: 40px;
    //}
    /*** 文字特效处理start ***/

    .text1 {
      font-size: 40px;
      color: transparent;
      background: linear-gradient(45deg, rgba(0, 173, 181, 1) 0%, rgba(0, 173, 181, .4) 100%);
      -webkit-background-clip: text;
    }

    /*** 文字特效处理 end ***/


    .small-title {
      font-size: 2vmin;
      text-align: left;
      .title-font()
    }

    strong {
      font-size: 1.8vmin;
    }

    li {
      font-size: 1.6vmin;
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

</style>