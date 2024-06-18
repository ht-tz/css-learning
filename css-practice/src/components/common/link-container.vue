<template>

</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: "link-container",
  props:{

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

</style>
