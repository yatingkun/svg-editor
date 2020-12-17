import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        left: [],//左侧视图配置
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

        },
    },
    actions: {
        initConfig(context) {
            axios.get('./hmi-config.json').then(({ data }) => {
                context.commit('setConfig', data);
            })
        }
    },
    getters: {

    }
})
export default store;