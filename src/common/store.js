import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import Model from './enum/model.js'
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        left: [],//左侧视图配置
        model: Model.none,//当前的操作模式
        graphyType: null,//鼠标选中的图形组件
        activeVue: [],//可用于画布画图的vue组件

    },
    mutations: {
        /**加载各个区域的视图配置 */
        setConfig(state, config) {
            if (config && config["view-config"]) {
                if (!Array.isArray(config["view-config"]))
                    return;
                config["view-config"].forEach(item => {
                    if (item["views-info"] && state[item.area]) {
                        state[item.area] = item["views-info"];
                    }
                });
            }
            state.model = Model.none;//设置模式为none
        },
        graphySelect(state, graphyType) {
            state.model = Model.select
            state.graphyType = graphyType;
        },
        addActiveVue(state, com) {
            state.activeVue.push(com);
        },
        setModel(state, model) {
            state.model = model;
        }
    },
    actions: {
        initConfig(context) {
            axios.get('./hmi-config.json').then(({ data }) => {
                context.commit('setConfig', data);
            })
        }
    },
    getters: {
        currentVue: function (state) {
            if (!state.graphyType)
                return null;
            let current = state.activeVue.filter(vue => vue.type === state.graphyType);
            if (current && state.model === Model.select) {
                return current[0];
            }
            return null;
        }
    }
})
export default store;