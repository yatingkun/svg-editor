<template>
  <div id="baseGraphic" role="tablist">
    <b-card v-for="(item, index) in infos" no-body class="mb-1" :key="index">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block variant="info" @click="graph_click(index)">{{
          item.description
        }}</b-button>
      </b-card-header>
       <b-collapse
        visible
        accordion="accordion"
        role="tabpanel"
      >
        <b-card-body>
            <button class="tool_button" v-for="(com,index) in item.components" :key="index" :id="com.type" :title="com.title">
                 <i class="iconfont icon_style iconrealLineChar"></i>
                <span>{{com.description}}</span>
            </button>
       
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>
<script>
export default {
  name: "Graphics",
  data() {
    return {
    };
  },
  props: {
    infos: {
      type: Array,
      default: () => {
        [];
      },
    },
  },
  methods: {
    graph_click(index) {
       this.$children[index].show = !this.$children[index].show;
    },
  },
  mounted() {
  },
};
</script>
<style scoped src="../../assets/fonts/iconfont.css"></style>
<style scoped>
.card-body {
  display: flex;
  flex-direction: column;
  padding: 0;
  flex-wrap: wrap;
}
.tool_button,
.tool_button_current {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30px;
  margin: 0px 0px 5px 0px;
  box-shadow: inset 0 3px 10px rgba(255, 255, 255, 0.1),
    inset 0 -3px 10px rgba(0, 0, 0, 0.2);
  outline: 0 none !important;
}
.tool_button_current {
  background-color: gainsboro;
  border: transparent;
}

.tool_button:hover {
  background: whitesmoke;
}

.tool_button span,
.tool_button_current span {
  margin-left: 10px;
}
</style>