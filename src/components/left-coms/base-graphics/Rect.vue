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
    initPosition(pt) {
      this.x = pt.x;
      this.y = pt.y;
    },
    abledDelete() {
      return this.width === 0 || this.height === 0;
    },
    mouseMove(pt){
      this.width=Math.abs(pt.x-this.x);
      this.height=Math.abs(pt.y-this.y);
    }
  },
  watch: {},
};
</script>
<style scoped>
</style>