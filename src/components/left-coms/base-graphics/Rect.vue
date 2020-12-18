<template>
  <rect
    :width="width"
    :height="height"
    :fill="fill"
    :stroke-width="strokeWidth"
    :stroke="stroke"
    :translate="translate"
    :scale="scale"
    :rotate="rotate"
    :skewX="skewX"
    :skewY="skewX"
    :rx="rx"
    :ry="ry"
    :x="x"
    :y="y"
  />
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
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
    rx: {
      type: Number,
      default: 0,
    },
    ry: {
      type: Number,
      default: 0,
    },
    fill:{
      type: String,
      default: "blue",
    },
     x: {
      type: Number,
      default: 300,
    },
    y: {
      type: Number,
      default: 100,
    },
  },
};
</script>
<style scoped>
</style>