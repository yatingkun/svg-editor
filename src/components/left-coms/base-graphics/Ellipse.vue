<template>
  <ellipse
    :width="width"
    :height="height"
    :fill="fill"
    :stroke-width="strokeWidth"
    :cx="cx"
    :cy="cy"
    :rx="rx"
    :ry="ry"
    :id="id"
  />
</template>
<script>
export default {
  data() {
    return {
      cx: 0,
      cy: 0,
      rx: 0,
      ry: 0,
    };
  },
  props: {
    id: {
      type: String,
      default: "",
    },
    width: {
      type: Number,
      default: 100,
    },
    height: {
      type: Number,
      default: 100,
    },
    strokeWidth: {
      type: Number,
      default: 1,
    },
    stroke: {
      type: String,
      default: "",
    },
    translate: {
      type: String,
      default: "",
    },
    scale: {
      type: String,
      default: "",
    },
    rotate: {
      type: String,
      default: "",
    },
    skewX: {
      type: Number,
      default: 0,
    },
    skewY: {
      type: Number,
      default: 0,
    },

    fill: {
      type: String,
      default: "red",
    },
  },
  methods: {
    initPosition(pt) {
      this.cx = pt.x;
      this.cy = pt.y;
    },
  },
};
</script>
<style scoped>
</style>