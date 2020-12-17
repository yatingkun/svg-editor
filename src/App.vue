<template>
  <div class="container-fluid" style="height: 100%">
    <header class="row"></header>
    <section class="row" id="main_body">
      <!-- <div id="left" class="col-1">

      </div> -->
      <left-com id="left" class="col-2"></left-com>
      <div id="svg_editor" class="col-8" style="position: relative">
        <ruler-com></ruler-com>
        <svgroot-com
          :width="width"
          :height="height"
          :content_w="content_w"
          :content_h="content_h"
          :content_x="content_x"
          :content_y="content_y"
        ></svgroot-com>
      </div>
      <div id="right" class="col-2"></div>
    </section>
    <footer class="row"></footer>
  </div>
</template>
<script>
import Ruler from "./components/center-coms/Ruler.vue";
import SvgRoot from "./components/center-coms/SvgRoot.vue";
import Left from "./components/left-coms/Left.vue"
export default {
  name: "App",
  data() {
    return {
      width: 0,
      height: 0,
      content_w: 800,
      content_h: 600,
    };
  },
  components: {
    "ruler-com": Ruler,
    "svgroot-com": SvgRoot,
    "left-com":Left
  },
  computed: {
    content_x() {
      return Math.round(this.width) / 2 - Math.round(this.content_w) / 2;
    },
    content_y() {
      return Math.round(this.height) / 2 - Math.round(this.content_h) / 2;
    },
  },
  methods: {
    initEditorArea() {
      this.width = document.getElementById("svg_editor").offsetWidth;
      setTimeout(() => {
        this.height = document.getElementById("svg_editor").offsetHeight;
      }, 10); //如果不延迟，此时无内容，高度为0。//是否有更好的加载方法？
    }
  },
  mounted() {
    this.initEditorArea();

  },
  created(){
    this.$store.dispatch("initConfig");//通知vuex加载全局的配置文件
  }
};
</script>

<style scoped>
header {
  height: 10%;
}
#main_body {
  height: 85%;
}
#svg_editor {
  background: #888;
}

footer {
  height: 5%;
}
</style>
