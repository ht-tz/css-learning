<template>
  <div class="menu-container">
    <div>
      <span class="title">{{ title }}</span>
    </div>
    <p><strong class="vue">Pure CSS Skill</strong></p>
    <div class="content">
      <div class="menuItem" v-for="(item,index) in dataList">
        <menuItem
            @click="menuClick(item)"
            :menu-item="item"
            :menuName1="item.menuName1"
            :menuName2="item.menuName2"
            :image1="item.image1"
            :image2="item.image2"
            :key="index"
        ></menuItem>
      </div>
    </div>

    <!--   背景墙   -->
    <ul class="bubble-bgwall">
      <li>css</li>
      <li>css</li>
      <li>css</li>
      <li>css</li>
      <li>css</li>
      <li>css</li>
      <li>css</li>
      <li>css</li>
      <li>css</li>
      <li>css</li>
    </ul>
  </div>


</template>

<script lang="ts">
import {ref, defineComponent} from 'vue';
import menuItem from './views/menu-item.vue'
import menuList from '../../config/menu.json'
import homeContainer from './views/home-container.vue'

export default defineComponent({
  name: 'index',
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  components: {
    menuItem,
    homeContainer
  },
  emits: ['clickMenuItem'],
  setup: (props, ctx) => {

    console.log(menuList);
    const title = menuList.title;
    const dataList = menuList.dataList;
    const count = ref(0);

    //菜单点击事件
    const menuClick = (item: any) => {
      ctx.emit('clickMenuItem', item);
      console.log(item);
    }

    return {
      count,
      title,
      dataList,
      menuClick
    }
  }
})
</script>


<style lang="less" scoped>
@import "./less/index.less";
</style>
