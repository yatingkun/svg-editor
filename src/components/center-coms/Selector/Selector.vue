<template>
  <g id="selectorParentGroup" transform="" display="block">
    <rect
      id="selectorRubberBand"
      fill="#22C"
      fill-opacity="0.15"
      stroke="#22C"
      stroke-width="0.5"
      display="none"
      style="pointer-events: none"
      x="0"
      y="0"
      width="0"
      height="0"
    ></rect
    ><!--多选模式下用这个矩形来计算到底有哪些框被选中了--->
    <box-com
      v-for="item in selectorBoxs"
      :key="item.id"
      :id="item.id"
      :path="item.path"
      :display="item.display"
      :crDisplay="item.crDisplay"
      :boxInfo="item.boxInfo"
    ></box-com>
  </g>
</template>
<script>
import SelectorBox from "./SelectorBox.vue";
import Methods from "../../../common/Helper/Math.js";
export default {
  data() {
    return {};
  },
  props: {
    selectorBoxs: {
      type: Array,
      default:()=>{return [];} 
    },
  },
  methods: {
    /**
     * 设置单个元素的选中框
     * @param {Object} bbox -选中元素的宽高及原点
     */
    setSelector(bbox) {
      if (!bbox) return;
      let selectorInfo = {
        id: bbox.id,
        display: "inline",
        crDisplay: "none",
        boxInfo: null,
      };
      let result = Methods.resize(bbox);
      if (result) {
        selectorInfo.boxInfo = result;
        this.selectorBoxs.push(selectorInfo);
      }
    },
  },
  components: {
    "box-com": SelectorBox,
  },
};
</script>
<style scoped>
</style>