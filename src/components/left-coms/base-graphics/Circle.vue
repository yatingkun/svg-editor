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
    :cx="cx"
    :cy="cy"
    :rx="rx"
    :ry="ry"
  />
</template>
<script>
export default {
  name: "Rect",
  data() {
    return {};
  },
  props: {
    width: {
      type: Number,
      default: 0,
    },
    height: {
      type: Number,
      default: 0,
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
    cx: {
      type: Number,
      default: 0,
    },
    cy: {
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
  },
};
</script>
<style scoped>
</style>