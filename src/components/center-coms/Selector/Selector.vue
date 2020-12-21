<template>
  <g id="selectorParentGroup" transform="translate(38,152)" display="block">
    <rect
      id="selectorRubberBand"
      fill="#22C"
      fill-opacity="0.15"
      stroke="#22C"
      stroke-width="0.5"
      display="none"
      style="pointer-events: none"
      x="535.5"
      y="299.203125"
      width="0"
      height="0"
    ></rect>
    <box-com></box-com>
    </g>
</template>
<script>
import SelectorBox from "./SelectorBox.vue"
export default {
  data() {
    return {};
  },
  components:{
    "box-com":SelectorBox
  }
};
</script>
<style scoped>
</style>