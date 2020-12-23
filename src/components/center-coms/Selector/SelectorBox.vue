<template>
  <g :id="`selector_${id}`" :transform="transform" :display="display"
    ><path
      :id="`selected_${id}`"
      fill="none"
      stroke="#22C"
      style="pointer-events: none"
      :d="boxInfo.dstr"
    ></path>
    <g :display="crDisplay"
      ><circle
        id="selectorGrip_resize_nw"
        fill="#fff"
        stroke="#22C"
        r="4"
        style="cursor: nw-resize"
        stroke-width="2"
        pointer-events="all"
        :cx="boxInfo.nw[0]"
        :cy="boxInfo.nw[1]"
      ></circle
      ><circle
        id="selectorGrip_resize_n"
        fill="#fff"
        stroke="#22C"
        r="4"
        style="cursor: n-resize"
        stroke-width="2"
        pointer-events="all"
        :cx="boxInfo.n[0]"
        :cy="boxInfo.n[1]"
      ></circle
      ><circle
        id="selectorGrip_resize_ne"
        fill="#fff"
        stroke="#22C"
        r="4"
        style="cursor: ne-resize"
        stroke-width="2"
        pointer-events="all"
        :cx="boxInfo.ne[0]"
        :cy="boxInfo.ne[1]"
      ></circle
      ><circle
        id="selectorGrip_resize_e"
        fill="#fff"
        stroke="#22C"
        r="4"
        style="cursor: e-resize"
        stroke-width="2"
        pointer-events="all"
        :cx="boxInfo.e[0]"
        :cy="boxInfo.e[1]"
      ></circle
      ><circle
        id="selectorGrip_resize_se"
        fill="#fff"
        stroke="#22C"
        r="4"
        style="cursor: se-resize"
        stroke-width="2"
        pointer-events="all"
        :cx="boxInfo.se[0]"
        :cy="boxInfo.se[1]"
      ></circle
      ><circle
        id="selectorGrip_resize_s"
        fill="#fff"
        stroke="#22C"
        r="4"
        style="cursor: s-resize"
        stroke-width="2"
        pointer-events="all"
        :cx="boxInfo.s[0]"
        :cy="boxInfo.s[1]"
      ></circle
      ><circle
        id="selectorGrip_resize_sw"
        fill="#fff"
        stroke="#22C"
        r="4"
        style="cursor: sw-resize"
        stroke-width="2"
        pointer-events="all"
        cx="217.5"
        cy="253.203125"
      ></circle
      ><circle
        id="selectorGrip_resize_w"
        fill="#fff"
        stroke="#22C"
        r="4"
        style="cursor: w-resize"
        stroke-width="2"
        pointer-events="all"
        :cx="boxInfo.w[0]"
        :cy="boxInfo.w[1]"
      ></circle
      ><line
        id="selectorGrip_rotateconnector"
        stroke="#22C"
        :x1="boxInfo.n[0]"
        :y1="boxInfo.n[1]"
        :x2="boxInfo.n[0]"
        :y2="boxInfo.n[1]+20"
      ></line
      ><circle
        id="selectorGrip_rotate"
        fill="lime"
        r="4"
        stroke="#22C"
        stroke-width="2"
        style="cursor: url(images/rotate.png) 12 12, auto"
        cx="347"
        cy="95.203125"
      >
      </circle></g
  ></g>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    transform: {
      type: String,
    },
    display: {
      type: String,
      required: true,
    },
    crDisplay: {
      type: String,
      required: true,
    },
    boxInfo: {
      type: Object,
      default: () => {
        return {      
          dstr: "",
          nw: [0, 0],
          ne: [0, 0],
          sw: [0, 0],
          se: [0, 0],
          n: [0, 0],
          w: [0, 0],
          e: [0, 0],
          s: [0, 0],
        };
      },
    },
  },
};
</script>
<style  scoped>
</style>