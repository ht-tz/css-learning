<template>
  <div class="loading-container">
    <div class="small-title">
      <strong>5.Loading打点</strong>
      <ul>
        <li>属性:content与:before 及 :after 伪元素配合使用，来插入生成内容</li>
      </ul>
    </div>

    <div class="title">
      <div class="rect"></div>
      <div class="text">车辆预警</div>
    </div>
    <!-- loading打点加载的具体实现 -->
    <div class="loading">
      <p>加载中</p>
    </div>


  </div>
</template>

<script>
export default {
  name: "Loading"
}
</script>

<style lang="less" scoped>
.loading-container {
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


  .title {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #2b3139;
    .rect {
      height: 20px;
      width: 3px;
      background-color: #fff;
    }
    .text {
      margin-left: 10px;
      height: 20px;
      font-size: 20px;
      font-weight: bold;
    }
  }

  .loading {
    display: flex;
    justify-content: left;
    align-items: center;

    width: 100%;
    height: 400px;

    p {
      color: #5956af;
      font-size: 50px;
      font-weight: bold;
    }

    p::after {
      content: "";

      /*
      1.name: 定义规则名称,
      2.animation-duration: 定义动动画完成的周期,
      3.animation-iteration-count: infinite规定动画无线次循环
      4.animation-timing-function  step(朱)

      */
      animation: dot 2s infinite steps(5, start);
    }


    /*定义动画规则*/
    @keyframes dot {
      20% {
        content: ".";
      }
      40% {
        content: "..";
      }
      60% {
        content: "...";
      }
      80% {
        content: "....";
      }
      100% {
        content: ".....";
      }
    }


  }
}

</style>