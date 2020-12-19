<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="svgroot"
    xlinkns="http://www.w3.org/1999/xlink"
    :width="root_w"
    :height="root_h"
    overflow="visible"
    style="display: block"
    @mousedown="mousedown"
    @mousemove="mousemove"
    @mouseup="mouseup"
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
    >
      <g class="layer" style="pointer-events: none" ref="flag_g">
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
      <g class="layer" style="pointer-events: all" ref="layer1">
        <title style="pointer-events: inherit">Layer 1</title>
        <component
          v-for="(svg, index) in activeComs"
          :key="index"
          :is="svg.com"
          :id="svg.id"
          ref="svgComs"
        ></component>
      </g>
    </svg>
  </svg>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import Model from "../../common/enum/model.js";
import Methods from "../../common/Helper/Math.js";
export default {
  name: "svgroot-com",
  data() {
    return {
      activeComs: [], //界面画好的svg组件集合{id,com},搭配this.$refs可拿到具体的svg组件实例
      currentId: "", //当前已挂载到dom上的vue实例的id
      currentDomCom: null, //当前已挂载到dom上的vue实例
    };
  },
  components: {},
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
    /**mousedown方法添加组件后，在this.nextTick()中去看this.$refs中的组件集合,发现新产生的组件也还没加进来，所以只能在updated()钩子方法中获取*/
    mousedown: function (evt) {
      if (this.model === Model.select && this.currentVue) {
        this.currentId = Methods.getUniqueId();
        let currentMyCom = {
          id: this.currentId,
          com: this.currentVue.com,
        }; //记录当前svg的构造器
        this.activeComs.push(currentMyCom); //此时界面会自动出现这个svg组件
        this.$nextTick(function () {
          //等dom完全挂载到界面上后，设置初始值
          setTimeout(() => {
            let result = this.$refs.svgComs.some((svg) => {
              if (svg.id === this.currentId) {
                return (this.currentDomCom = svg);
              }
            });
            if (this.currentDomCom && result) {
              if (!Methods.checkMethods(this.currentDomCom, this.graphyType)) {
                if (typeof this.currentIndex !== "undefined") {
                  this.activeComs.splice(this.currentIndex, 1);
                }
                this.currentId = "";
                this.currentDomCom = null;
                this.$store.commit("setModel", Model.none);
              } else {
                const pt = Methods.getStartPosition(this.$refs["flag_g"], evt); //算出鼠标点击的地方相对于背景图的x,y
                this.currentDomCom.initPosition(pt);
              }
            }
          }, 10);
        });
      }
    },
    mousemove(evt) {
      if (this.currentDomCom && this.currentVue) {
        const pt = Methods.getStartPosition(this.$refs["flag_g"], evt); //算出鼠标点击的地方相对于背景图的x,y
        try {
          this.currentDomCom.mouseMove(pt);
        } catch (ex) {
          console.log(`${this.graphyType}.vue的mouseMove()执行出错:${ex}`);
        }
      }
    },
    mouseup() {
      if (this.currentDomCom && this.currentVue) {
        try {
          if (this.currentDomCom.abledDelete()) {
            if (typeof this.currentIndex !== "undefined") {
              this.activeComs.splice(this.currentIndex, 1);
            }
          }
        } catch (ex) {
          console.log(`${this.graphyType}.vue的abledDelete()执行出错:${ex}`);
        }
      }
      this.currentDomCom = null;
      this.currentId = "";
      this.$store.commit("setModel", Model.none);
    },
  },
  computed: {
    ...mapState(["model", "graphyType"]), //根据activeVue[]和当前选中的graphyType,获取组件,并往activeComs[]即可
    ...mapGetters(["currentVue"]),
    currentIndex: function () {
        let index = this.activeComs.findIndex(
          (m) => m.id === this.currentDomCom.id
        ); 
        return index;
    },
  },
};
</script>
<style scoped>
</style>
