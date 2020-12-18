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
        <component
          v-for="(svg, index) in activeComs"
          :key="index"
          :is="svg"
        ></component>
      </g>
    </svg>
  </svg>
</template>
<script>
import { mapState } from "vuex";
//import Model from "../../common/enum/model.js";
export default {
  name: "svgroot-com",
  data() {
    return {
      activeComs: [],
      nextId: 0,
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
  methods: {
    getCom() {
      if (this.activeVue) {
        this.activeVue.forEach((vue) => {
          if (vue.type === this.graphyType) {
            this.activeComs.push(vue.com);
          }
        });
      }
    },
  },
  computed: {
    ...mapState(["model", "graphyType", "activeVue"]), //根据activeVue[]和当前选中的graphyType,获取组件,并往activeComs[]即可
  },
  watch: {},
};
</script>
<style scoped>
</style>
