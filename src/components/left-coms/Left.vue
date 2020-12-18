<template>
  <div id="graphics_container">
    <b-tabs content-class="mt-3">
      <!-- <b-tab title="图形" active>
        <graphictool-content></graphictool-content>
      </b-tab>
      <b-tab title="图库" id="gallery_container">
        <gallery-content></gallery-content>
      </b-tab> -->
      <b-tab
        v-for="(item, index) in config"
        :title="item.description"
        :key="index"
        :active="index === 0"
      >
        <component
          :is="registedComs[item.container].com"
          :infos="registedComs[item.container].infos"
        ></component>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "left-com",
  data() {
    return {
      config: [],
      registedComs: [],
    };
  },
  created() {},
  methods: {
    updateView(config) {
      this.config = config;
      if (this.config) {
        try {
          this.config.forEach((item) => {
            let dir = item.type === "" ? "./" : "item.type"; //如果type为空,则在同级目录
            if (item.container) {
              let com = () => import(`${dir}${item.container}.vue`); //添加组件的容器，具体到哪个组件需要添加是在Graphics.vue
              if (com && item.components) {
                this.registedComs[item.container] = {
                  com: com,
                  infos: item.components,
                };
                item.components.forEach((activeComsInfo) => {
                  activeComsInfo.components.forEach((comInfo) => {
                    let activedCom = () =>
                      import(`./${activeComsInfo.type}/${comInfo.type}.vue`);
                    if (activedCom) {
                      let parame={
                        "com":activedCom,
                        "type":comInfo.type
                      }
                      this.$store.commit("addActiveVue", parame); //组册能画在画布上的组件
                    }
                  });
                });
              }
            }
          });
        } catch (ex) {
          console.log("加载左侧组件失败:" + ex);
        }
      }
    },
  },
  computed: {
    ...mapState(["left"]),
  },
  watch: {
    left: function (newValue) {
      //配置发生变化时根据新值重新
      this.updateView(newValue);
      return newValue;
    },
  },
};
</script>

<style scoped>
#graphics_container {
  height: 100%;
  overflow: hidden;
}

#graphics_container * {
  font-size: 90%;
}

#graphics_container .tool_button {
  font-size: 1.3em;
}

.list-group-item {
  background-color: transparent;
  padding: 0.5rem 1.25rem;
}
</style>
