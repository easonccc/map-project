import Vue from "vue";
import Vuex from "vuex";
// import "./config.js"

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        type: "111",
        organ: {
            title: "旅游大数据中心",
            type: "tourism"
        },
        sot: [],
        city: [],
        system: [],
        model: null
    },
    getters: {
        getType: function(state) {
            if (!state.type) {
                state.type = localStorage.getItem("type");
            }
            return state.type;
        },
        getSot: function(state) {
            return state.sot.data;
        },
        getCity: function(state) {
            return state.city.data;
        },
        getSystem: function(state) {
            return state.system.data;
        },
        getModel: function(state) {
            return state.model;
        }
    },
    mutations: {
        //格式：类型(名字)+处理函数
        //加1
        changetype(state, type) {
            console.log(state, type); //state对象
            state.type = type;
        },
        changeOrgan(state, organ) {
            console.log(state, organ); //state对象
            state.organ = organ;
        },
        changeSot(state, all) {
            // 修改sot里面的参数
            state.sot = all;
            sessionStorage.setItem("sot", JSON.stringify(all));
        },
        changeCity(state, all) {
            state.city = all;
            sessionStorage.setItem("city", JSON.stringify(all));
        },
        changeSystem(state, all) {
            state.system = all;
            sessionStorage.setItem("system", JSON.stringify(all));
        },
        changeModel(state, type) {
            state.model = type;
            sessionStorage.setItem("model", JSON.stringify(type));
        }
    },
    actions: {
        /* increment({commit}){
           commit("INCREMENT")
         }*/
        changeSot({ commit }, data) {
            commit("changeSot", data);
        },
        changeCity({ commit }, data) {
            commit("changeCity", data);
        },
        changeSystem({ commit }, data) {
            commit("changeSystem", data);
        },
        changeModel({ commit }, data) {
            commit("changeModel", data);
        }
    }
});

export default store;
