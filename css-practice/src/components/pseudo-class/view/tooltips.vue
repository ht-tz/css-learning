<template>
  <div class="tooltips">
    <div class="small-title">
      <strong>3.伪元素加平移变化实现自定义提示框</strong>
      <p>实现思路：</p>
      <ul>
        <li>1.hover操作时,透明度为1</li>
        <li>2.hover操作结束时,透明度为0</li>
        <li>3.指向三角绘制:先绘制正方形旋转45reg,
          使上半部份与tooltip内容边框重叠,就实现了视觉上的小三角形
        </li>
      </ul>
    </div>
    <!-- 自定义提示框体实现 -->
    <!--tooltips-top-->
    <div class="tooltips-box">
      <div class="btn top">
        <span>TooltipsButton</span>
        <span class="tooltips-content"> the way that i want to tell you </span>
      </div>
    </div>

    <!--tooltips-left-->
    <div class="tooltips-box">
      <div class="btn left">
        <span>TooltipsButton</span>
        <span class="tooltips-content"> the way that i want to tell you </span>
      </div>
    </div>


    <!--tooltips-right-->
    <div class="tooltips-box">
      <div class="btn right">
        <span>TooltipsButton</span>
        <span class="tooltips-content"> the way that i want to tell you </span>
      </div>
    </div>

    <!--tooltips-bottom-->
    <div class="tooltips-box">
      <div class="btn bottom">
        <span>TooltipsButton</span>
        <span class="tooltips-content"> the way that i want to tell you </span>
      </div>
    </div>


  </div>
</template>

<script>
import {defineComponent, ref} from "vue";

export default defineComponent({
  name: "tooltips",
  setup() {
  },
});
</script>

<style lang="less" scoped>
.tooltips {
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

  /* 为例元素实现 tooltips提示 */

  .tooltips-box {
    height: 150px;
    width: 100%;

    .btn {
      position: relative;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 150px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      background-color: #b9b6bd;
      border-radius: 6px;
      overflow: hidden;
    }

    .btn:hover {
      overflow: visible;
    }

    & :hover {
      background-color: rgba(76, 60, 223, 0.933);
    }

    .btn:hover .tooltips-content {
      opacity: 1;
    }

    .tooltips-content {
      background: #05a8ff;
      box-shadow: 0 0 25px 2px rgba(205, 210, 214, 0.8);
      box-sizing: border-box;
      color: #ffffff;
      font-size: 12px;
      line-height: 15px;
      /*字间距*/
      letter-spacing: 1px;
      max-width: 200px;
      min-width: 145px;
      padding: 1em;
      position: absolute;
      opacity: 0;
      -webkit-transition: all 0.3s ease;
      /* 过度效果 */
      transition: all 0.3s ease;
    }

    /* top */

    .top .tooltips-content {
      bottom: calc(100% + 35px);
      left: 50%;
      transform: translateX(-50%);
    }

    .top .tooltips-content:after {
      position: absolute;
      transform: rotate(45deg);
      bottom: -5px;
      left: 50%;
      margin-left: -5px;
      height: 10px;
      width: 10px;
      background: #05a8ff;
      /* content很关键 */
      content: "";

    }

    /* left */

    .left .tooltips-content {
      right: calc(100% + 25px);
      top: 50%;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
    }

    .left .tooltips-content:after {
      position: absolute;
      transform: rotate(45deg);
      right: -5px;
      top: 50%;
      margin-top: -5px;
      height: 10px;
      width: 10px;
      background: #05a8ff;
      content: "";
    }

    /* right*/

    .right .tooltips-content {
      left: calc(100% + 25px);
      top: 50%;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
    }

    .right .tooltips-content:after {
      position: absolute;
      transform: rotate(45deg);
      left: -5px;
      top: 50%;
      margin-top: -5px;
      height: 10px;
      width: 10px;
      background: #05a8ff;
      content: "";
    }


    .bottom .tooltips-content {
      top: calc(100% + 25px);
      left: 50%;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
    }

    .bottom .tooltips-content:after {
      position: absolute;
      transform: rotate(45deg);
      top: -5px;
      left: 50%;
      height: 10px;
      width: 10px;
      background: #05a8ff;
      content: "";
    }


  }
}
</style>
