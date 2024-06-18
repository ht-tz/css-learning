<template>
  <!-- 切角 -->
  <div class="list">
    <div class="small-title">
      <strong> 9.切角</strong>
      <!--      <p>实现思路：</p>-->
      <p>

      </p>
    </div>
    <!-- 切角 -->
    <div class="cut-corner-box">
      <div class="cut" :class="cutStyle"></div>
    </div>

    <!-- 点击绑定不同的样式 -->
    <el-row style="padding:40px 0 40px 0">
      <el-button @click="changeStyle('1')">切角</el-button>
      <el-button @click="changeStyle('2')">全切角</el-button>
      <el-button @click="changeStyle('3')">折角</el-button>
      <el-button @click="changeStyle('4')">内圆角</el-button>
      <el-button @click="changeStyle('5')">圆切角</el-button>
      <!--      <el-button @click="changeStyle('6')">剪裁圆切角</el-button>-->
    </el-row>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive, ref, toRefs} from 'vue';

export default defineComponent({
  name: "cut-corner",
  setup(props, ctx) {

    //默认样式为切角
    const cutStyle = ref<string | number>('cutOne');

    // //出事第一次默认样式
    // onMounted(() => {
    //   cutStyle.value = 'cutOne';
    // });

    const styleObjArr = [
      {style: 'cutOne', value: '1'},
      {style: 'cutAll', value: '2'},
      {style: 'cutThree', value: '3'},
      {style: 'cutFour', value: '4'},
      {style: 'cutCircle', value: '5'},
      {style: 'cutCircleByPath', value: '6'}
    ]

    //选择不同的样式文件
    const changeStyle = (value: string) => {
      styleObjArr.forEach(el => {
        if (value === el.value) {
          cutStyle.value = el.style;
        }
      });
    }


    return {
      //将响应式对象转换为普通对象,但每个节点都是响应式节点
      //点击选择不同的样式
      changeStyle,
      styleObjArr,
      cutStyle
    }

  }
});


</script>

<style lang="less" scoped>
.list {
  position: relative;
  width: 800px;
  color: #fff;
  margin: 40px 0 40px 0;

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


  .cut-corner-box {
    margin-top: 50px;
    /* 切角 */

    .cut {
      height: 100px;
      width: 200px;
    }

    /** 单切角 **/

    .cutOne {
      background-color: rgba(60, 208, 222, 0.95);
      background: linear-gradient(-45deg, transparent 15px, rgba(60, 208, 222, 0.95) 0);
    }

    /* 全切角 */

    .cutAll {
      background: rgb(26, 201, 175); /*compatibility*/
      background: linear-gradient(135deg, transparent 15px, rgb(26, 201, 175) 0) top left,
      linear-gradient(225deg, transparent 15px, rgb(26, 201, 175) 0) top right,
      linear-gradient(45deg, transparent 15px, rgb(26, 201, 175) 0) bottom left,
      linear-gradient(-45deg, transparent 15px, rgb(26, 201, 175) 0) bottom right;
      /* transparent 15px 越大切角越大 */
      /* 四切角 关系为90deg */
      /* 切角读书以上下边为起点 默认90deg */
      background-size: 50% 50%; /* 类设置图片尺寸 使每一渐变层只占元素的1/2 从而不覆盖transparent的角度 */
      background-repeat: no-repeat;
    }


    /* 折角 */

    .cutThree {
      background: linear-gradient(-135deg, transparent 50%, rgba(0, 0, 0, .4) 0) no-repeat 100% 0 / 30px 30px,
      linear-gradient(-135deg, transparent 20px, #58a);
    }

    /* 内圆角 */

    .cutFour {
      background: #c066ed;
      border-radius: 8px;
      /*box-shadow: h-shadow v-shadow blur spread color inset*/

      /*h-shadow	必需的。水平阴影的位置。允许负值
      v-shadow	必需的。垂直阴影的位置。允许负值
      blur	可选。模糊距离
      spread	可选。阴影的大小
      color	可选。阴影的颜色。在CSS颜色值寻找颜色值的完整列表
      inset	可选。从外层的阴影（开始时）改变阴影内侧阴影*/
      box-shadow: 0 0 0 8px #d2bbe3;
      /* 描边特性 */
      outline: 8px solid #d64d91;
    }

    /*圆切角*/

    .cutCircle {
      background: radial-gradient(circle at top left, transparent 15px, #58a 0) top left,
      radial-gradient(circle at top right, transparent 15px, #58a 0) top right,
      radial-gradient(circle at bottom right, transparent 15px, #58a 0) bottom right,
      radial-gradient(circle at bottom left, transparent 15px, #58a 0) bottom left;
      background-size: 50% 50%;
      background-repeat: no-repeat;
    }

    /*  圆切剪裁 */

    .cutCircleByPath {
      background: #58a;
      clip-path: polygon(20px 0,
      calc(100% - 20px) 0,
      100% 20px,
      100% calc(100% - 20px),
      calc(100% - 20px) 100%,
      0px 100%,
      0 calc(100% - 20px),
      0 20px);
    }


  }
}
</style>