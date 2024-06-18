<template>
  <div class="home-container">
    <!--  相关模块组件列表  -->
    <div class="left">
      <div
          class="left-menu"
          v-for="(item,index) in menuChildren"
          :key="index"
          @click.stop="secondMenuClick(item)"
      >
        <label class="label">
          <i></i>
          <span>{{ item.name }}</span>
        </label>
      </div>
    </div>

    <!--  组件  -->
    <div class="right">
      <!--   返回主界面   -->
      <el-button
          @click.stop="back"
          class="back"
          type="primary"
          icon="el-icon-back">
        返回主页
      </el-button>
      <!-- 子组件容器 -->
      <component
          :is="componentKey"
      ></component>
    </div>

  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from "vue";
//css 书写规范
import writeStandard from "../../css-standard/css-write-skill.vue";
//css 书写规范参考
import cssReferenceLink from "../../css-standard/css-refrence-link.vue"

export default defineComponent({
  name: "App",
  components: {
    writeStandard,
    cssReferenceLink
  },
  emits: ['back'],
  props: {
    //左侧菜单列表
    menuChildren: {
      type: Array,
      default: () => []
    },
    //菜单标题
    menuName: {
      type: String,
      default: '',
    }
  },
  setup(props, ctx) {

    onMounted(() => {
      //初始化进入页面默认取第一个组件展示
      componentKey.value = props.menuChildren[0].component;
    })

    //子组件
    const componentKey = ref('');
    /**
     * @description 菜单点击事件
     * @method secondMenuClick
     * @param item {object} 菜单数据
     */
    const secondMenuClick = (item: any) => {
      componentKey.value = item.component;
    }

    /**
     * @description 返回主界面
     * @method back
     */
    const back = (): void => {
      ctx.emit('back', true)
    }
    return {
      componentKey,

      secondMenuClick,
      back,
    };
  },
});

</script>

<style lang="less" scoped>
@import "../less/home.less";
</style>
