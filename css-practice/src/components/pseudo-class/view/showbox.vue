<template>
  <!-- 伪类实现阴影盒子 -->
  <div class="list">
    <div class="small-title">
      <strong>1.使用伪类实现盒子阴影 </strong>
      <p>实现思路：</p>
      <p>
        这里设置一个空的伪元素设置阴影透明度为0隐藏，
        再通过鼠标悬停恢复它的透明度，下面是传统和伪类实现的代码对比
      </p>
      <ul>
        <li>box-shadow:</li>
      </ul>
    </div>
    <!-- 伪类实现盒子阴影 -->
    <div class="box">
      <h1>测试</h1>
      <div class="before-box">
        Animate/transition box-shadow
        可以使用box-shadow属性来实现盒子阴影效果，但重绘消耗较多
      </div>
    </div>
  </div>

  <div class="list">
    <div class="small-title">
      <strong>2.伪类after实现的三角箭头</strong>
      <p>实现思路：</p>
      <p>
        三边设置边框，箭头指向的那个方向的border不用设置，位于箭头两边的边框颜色为透明
        （transparent），对边为主体边框颜色（较大的）/主体背景颜色（较小的），
        因为我们要有边框颜色的三角箭头，当第一个箭头（较大的）被第二个箭头（较小的）
        通过准确覆盖之后剩下没被覆盖的边缘就是合成三角箭头的边框了，
        其颜色就是较大的那个三角箭头的颜色，可调。而较小的那个三角箭头
        的颜色要设置成主体颜色，进行负值定位偏移时要把主体边框盖住，从而与主体合在一起了
      </p>
      <!-- 伪类after实现的三角箭头 -->
      <div class="triggle-box">
        <div class="container">
          <img alt="" src="http://placehold.it/400x200" />
          <div class="arrow-left"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "shadowbox",
};
</script>

<style lang="less" scoped>
.list {
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
  .box {
    padding: 15px;
    width: 100%;
    height: 100px;
    background-color: rgb(230, 212, 212);
    /* 属性渐变 */
    -webkit-transition: 0.1s;
    transition: 0.2s;
    &:hover {
      background-color: rgb(49, 48, 48);

      /* h-shadow水平值 , v-shadow 垂直阴影,blur 模糊距离,spread 阴影大小 ,color 阴影颜色, inset	可选。从外层的阴影（开始时）改变阴影内侧阴*/
      box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.8);
    }
  }

  /* 伪类after实现的三角箭头 */
  .triggle-box {
    background-color: #e1e1e1;
    border: 1px solid #eee;

    .container {
      margin: 40px auto;
      width: 600px;
      //height: 200px;
      border: 1px solid #eee;
      padding: 10px;
    }
    .container ::after {
      clear: both;
      content: "";
      display: flex;
      justify-content: flex-start;
      flex-direction: row;
    }

    .arrow-left {
      position: relative;
      width: 200px;
      height: 200px;
      background: #e9e9e9;
      float: right;
    }
    .arrow-left:before {
      z-index: 9999;
      content: "";
      display: block;
      width: 0;
      height: 0;
      border-top: 20px solid transparent;
      border-bottom: 20px solid transparent;
      border-right: 20px solid #e9e9e9;
      position: absolute;
      left: -20px;
      top: 80px;
    }
  }
}
</style>