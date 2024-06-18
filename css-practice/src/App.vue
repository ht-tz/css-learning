<template>
  <div class="viteContainer">
    <!--  主容器  -->
    <menuContainer v-if="isShow" @clickMenuItem="clickMenuItem"></menuContainer>
    <!--  展示容器  -->
    <homeContainer v-if="!isShow"
                   @back="back"
                   :menu-children="menuChildren"
                   :menu-name="secondMenuName">
    </homeContainer>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, ref, toRefs} from "vue";

import menuContainer from './components/menuContainer/index.vue';
import homeContainer from './components/menuContainer/views/home-container.vue';

export default defineComponent({
  name: "App",
  components: {
    menuContainer,
    homeContainer
  },
  setup() {
    const isShow = ref(true);
    ;

    //const不可修改
    let menuChildren = ref([]);
    //二级名称
    let secondMenuName = ref('');
    /**
     * @description 菜单点击事件
     * @method clickMenuItem
     * @param item 二级菜单obj
     */
    const clickMenuItem = (item: any): void => {
      //展示二级容器=>具体内容
      isShow.value = false;
      menuChildren.value = item.children;
      //二级大类细分内容
      secondMenuName = item.menuName;
    }
    /**
     * @description 从子容器返回,隐藏父容器,显示子容器
     * @method back
     * @param value {boolean}
     */
    const back = (value: boolean): void => {
      isShow.value = value;
    };
    return {
      menuChildren,
      isShow,
      secondMenuName,
      clickMenuItem,
      back,
    };
  },
});
</script>

<style lang="less" scoped>
</style>
