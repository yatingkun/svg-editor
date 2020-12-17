<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="svgroot"
    xlinkns="http://www.w3.org/1999/xlink"
    :width="root_w"
    :height="root_h"
    x="0"
    y="0"
    overflow="visible"
    style="display: block"
  >
    <defs></defs>
    <svg
      id="svgcontent"
      :width="content_w"
      :height="content_h"
      :x="content_x"
      :y="content_y"
      overflow="hidden"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:se="http://svg-edit.googlecode.com"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 800 600"
    >
      <!-- Created with SVG-edit - https://github.com/SVG-Edit/svgedit-->
      <g class="layer" style="pointer-events: none">
        <title style="pointer-events: inherit">background</title>
        <rect
          x="0"
          y="0"
          :width="content_w"
          :height="content_h"
          id="canvas_background"
          fill="#fff"
          style="pointer-events: inherit"
        ></rect>
      </g>
      <g class="layer" style="pointer-events: all">
        <title style="pointer-events: inherit">Layer 1</title>
      </g>
    </svg>
  </svg>
</template>
<script>
export default {
  name: "svgroot-com",
  data() {
    return {
    };
  },
  props: {
    root_w: {
      type: Number,
      default: 0,
    },
    root_h: {
      type: Number,
      default: 0,
    },
    content_w: {
      type: Number,
      default: 800,
    },
    content_h: {
      type: Number,
      default: 600,
    },
     content_x: {
      type: Number,
      default: 0,
    },
    content_y: {
      type: Number,
      default: 0,
    },
  },
  computed: {
  },

};
</script>
<style scoped>
</style>
