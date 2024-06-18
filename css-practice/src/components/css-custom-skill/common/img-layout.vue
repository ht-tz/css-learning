<template>
  <div class="list">
    <p>
      <strong> object-fit </strong>
    </p>

    <div class="object-fit-img-layout">
      <ul class="image-size">
        <li>
          vfdj
          <h3>Cover</h3>
          <img class="img cover" src="../../../assets/1.png">
        </li>
        <li>
          <h3>Contain</h3>
          <img class="contain" src="../../../assets/2.png">
        </li>
        <li>
          <h3>Fill</h3>
          <img class="fill" src="../../../assets/3.png">
        </li>
        <li>
          <h3>ScaleDown</h3>
          <img class="scale-down" src="../../../assets/4.png">
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
  name: 'text-align-last',


})
</script>
<style lang="less" scoped>
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

  .object-fit-img-layout {

    .image-size {
      display: flex;
      justify-content: space-between;
      width: 1000px;
      height: 400px;
      margin: 50px;

      li {
        width: 200px;
      }

      h3 {
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-weight: bold;
        font-size: 16px;
      }

      img {
        width: 100%;
        height: 260px;
        background-color: #3c9;
      }

      /*object-fit 属性指定元素的内容应该如何去适应指定容器的高度与宽度*/

      .cover {
        object-fit: cover;
      }

      .contain {
        object-fit: contain;
      }

      .fill {
        object-fit: fill;
      }

      .scale-down {
        object-fit: scale-down;
      }
    }
  }

}


</style>