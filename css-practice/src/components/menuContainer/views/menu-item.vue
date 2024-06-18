<template>
  <div class="menu-item">
    <div class="module">
      <img class="img" v-bind:src="image1">
      <span>{{menuName1}}</span>
    </div>
    <div class="module module1">
      <img class="img" v-bind:src="image2">
      <span>{{menuName1}}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'menuItem',
  props:{
    menuName1:{
      type:String,
      default:''
    },
    menuName2:{
      type:String,
      default:''
    },
    image1:{
      type:String,
      default:''
    },
    image2:{
      type:String,
      default:''
    }
  },
  setup: (props,context) => {

    const count = ref(0);

    return {
      count
    }
  }
})
</script>

<style lang="less" scoped>
.menu-item {
  position: relative;
  perspective: 800px;
  transform-style: preserve-3d;
  transition: all .6s;
  box-sizing: border-box;
  width: 240px;
  height: 320px;
  border-radius: 8px;
  background: #fff;
  cursor: pointer;
  font-weight: bold;

  .module {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all .5s;
    backface-visibility: hidden;

    span{
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      font-size: 20px !important;
      background-image: linear-gradient(92deg, #f66 0%, #f90 100%);
      -webkit-background-clip: text;
      color: #f66;
      animation: hue 5s infinite linear;
      -webkit-text-fill-color: transparent;
      text-align: center;
    }

    img{
      position: relative;
      width: 100%;
      height: 100%;
      border-radius: 4px;
      opacity: 0.98;
      box-shadow: 0 0 1.5rem rgba(17, 17, 17, .7);
      transition: .15s;
      object-fit: cover;
    }

  }
  /*由于我们将两个图像都藏在了背面，所以另一面没有任何东西。 所以接下来需要再把.front-face翻转180度*/
  .module1 {
    transform: rotateY(180deg);
  }

}

.menu-item:hover {
  transform: rotateY(180deg);
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
