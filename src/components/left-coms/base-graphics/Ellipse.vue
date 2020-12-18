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
    cx: {
      type: Number,
      default: 200,
    },
    cy: {
      type: Number,
      default: 200,
    },
    rx: {
      type: Number,
      default: 100,
    },
    ry: {
      type: Number,
      default: 100,
    },
    fill: {
      type: String,
      default: "red",
    }
  },
};
</script>
<style scoped>
</style>