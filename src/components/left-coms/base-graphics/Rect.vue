<template>
  <rect
    :width="width"
    :height="height"
    :fill="fill"
    :rx="rx"
    :ry="ry"
    :id="id"
    :x="x"
    :y="y"
    :stroke="stroke"
  />
</template>
<script>
export default {
  data() {
    return {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      fill: "#fff",
      rx: 0,
      ry: 0,
      strokeWidth: 1.5,
      stroke: "black",
      translate: "",
      scale: "",
      rotate: 0,
      skewX: 0,
      skewY: 0,
    };
  },
  props: {
    id: {
      type: String,
      default: "",
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    /**
     * @param {obj} pt -鼠标的当前位置
     */
    initPosition(pt) {
      this.x = pt.x;
      this.y = pt.y;
    },
    /**
     * @returns {Boolean} 是否能删除
     */
    abledDelete() {
      return this.width === 0 || this.height === 0;
    },
    /**
     * @param {Object} pt -鼠标的当前位置
     */
    mouseMove(pt) {
      this.width = Math.abs(pt.x - this.x);
      this.height = Math.abs(pt.y - this.y);
    },
    /**
     * @returns {Object} 返回元素的宽高,x,y,id
     */
    getBBox() {
      return {
        id: this.id,
        x: this.x,
        y: this.y,
        width: this.width,
        height: this.height,
      };
    },
  },
  watch: {},
};
</script>
<style scoped>
</style>