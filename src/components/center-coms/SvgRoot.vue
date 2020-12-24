<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="svgroot"
    xlinkns="http://www.w3.org/1999/xlink"
    :width="root_w"
    :height="root_h"
    overflow="visible"
    style="display: block"
    @mousedown.prevent="mousedown"
    @mousemove.prevent="mousemove"
    @mouseup.prevent="mouseup"
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
      <selector-com ref="selector" :selectorBoxs="selectorBoxs"></selector-com>
    </svg>
  </svg>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import Model from "../../common/enum/model.js";
import Methods from "../../common/Helper/Math.js";
import Selector from "./Selector/Selector.vue";
export default {
  name: "svgroot-com",
  data() {
    return {
      activeComs: [], //界面画好的svg组件集合{id,com},搭配this.$refs可拿到具体的svg组件实例
      currentId: "", //当前已挂载到dom上的vue实例的id,通过这个id来操作当前dom对象和选择框的变化
      selectorBoxs: [],
      selectorGridId: ["n", "s", "w", "e", "sw", "se", "ne", "nw"],
    };
  },
  components: {
    "selector-com": Selector,
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
    /**mousedown方法添加组件后，在this.nextTick()中去看this.$refs中的组件集合,发现新产生的组件也还没加进来，所以只能在updated()钩子方法中获取*/
    mousedown: function (evt) {
      if (this.model === Model.painting && this.currentVue) {
        let currentId = Methods.getUniqueId();
        let currentMyCom = {
          id: currentId,
          com: this.currentVue.com,
        }; //记录当前svg的构造器
        this.activeComs.push(currentMyCom); //此时界面会自动出现这个svg组件
        this.$nextTick(function () {
          //等dom完全挂载到界面上后，设置初始值
          setTimeout(() => {
            this.currentId = currentId;
            if (this.currentId !== "") {
              if (!Methods.checkMethods(this.currentDomCom, this.graphyType)) {
                //校验这个组件是否实现了所需要的方法
                if (this.domIndex >= 0) {
                  this.activeComs.splice(this.domIndex, 1);
                }
                this.init();
              } else {
                const pt = Methods.getStartPosition(this.$refs["flag_g"], evt); //算出鼠标点击的地方相对于背景图的x,y
                this.currentDomCom.initPosition(pt);
              }
            }
          }, 10);
        });
      }
      if (this.$refs.svgComs && this.model !== Model.painting) {
        let id="";
        this.$refs.svgComs.some((svg) => {
          if (svg.id === evt.target.id) {
            id = svg.id;
            this.$store.commit("setModel", Model.select); //鼠标点中画布上的元素进入选中模式
            return true;
          }
        });  
        this.currentId = id;//鼠标的点击目标不是画布上的元素则id被清空
      }
      if (this.model === Model.select) {
        if (this.selectorGridId.includes(evt.target.id.replace("selectorGrip_resize_", ""))) 
        {
          //鼠标放在了选择框的格子上
          this.$store.commit("setModel", Model.resizing); //进入重绘模式
          return;
        }
      }
    },
    mousemove(evt) {
      if (this.currentDomCom && this.model === Model.painting) {
        const pt = Methods.getStartPosition(this.$refs["flag_g"], evt); //算出鼠标点击的地方相对于背景图的x,y
        try {
          this.currentDomCom.mouseMove(pt);
        } catch (ex) {
          console.log(`${this.graphyType}.vue的mouseMove()执行出错:${ex}`);
        }
      }
      if (this.model === Model.resizing) {
        console.log(evt.target.id);
      }
    },
    mouseup() {
      if (this.currentDomCom && this.currentVue) {
        try {
          if (this.currentDomCom.abledDelete()) {
            //符合删除条件
            if (this.domIndex >= 0) {
              this.activeComs.splice(this.domIndex, 1);
            }
            this.init();
          } else {
            let bbox = this.currentDomCom.getBBox(); //设置选择框.每个元素需要自己返回自己的width,height,x,y
            if (bbox) {
              this.$refs.selector.setSelector(bbox); //设置选择框
              this.$store.commit("setModel", Model.select);
            }
          }
        } catch (ex) {
          console.log(`${this.graphyType}.vue的abledDelete()执行出错:${ex}`);
          this.init();
        }
      }
      if (this.model === Model.resizing) {
        this.$store.commit("setModel", Model.select); //转回元素选中模式
      }
    },
    /*回到初始状态 */
    init() {
      this.currentId = "";
      this.$store.commit("setModel", Model.none);
    },
  },
  computed: {
    ...mapState(["model", "graphyType"]), //根据activeVue[]和当前选中的graphyType,获取组件,并往activeComs[]即可
    ...mapGetters(["currentVue"]),
    domIndex: function () {
      let index = this.activeComs.findIndex((m) => m.id === this.currentId);
      return index;
    },
    currentDomCom: function () {
      let dom = null;
      if (!this.currentId) {
        return dom;
      } else {
        if (this.$refs.svgComs) {
          this.$refs.svgComs.some((svg) => {
            if (svg.id === this.currentId) {
              return (dom = svg);
            }
          });
        }
      }
      return dom;
    },
  },
  watch: {
    /**model变成绘画状态时,需要将当前currentDomCom, currentId清空*/
    model(value) {
      if (value === Model.painting) {
        this.currentId = "";
        this.selectorBoxs.forEach((box) => {
          box.display = "none";
        });
      }
    },
    currentId(val) {
      if (this.model === Model.select) {
        this.selectorBoxs.forEach((box) => {
          box.display = box.id === val ? "inline" : "none";
        });
        if (!val) {
          this.$store.commit("setModel", Model.none);
        }
      }
    },
  },
};
</script>
<style scoped>
</style>
