import Vue from "vue"
import Vuex from "vuex"
// import "./config.js"

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        type: '111',
        organ:{
            title:"旅游大数据中心",
            type:'tourism',
        }
    },
    getters: {
        getType: function(state) {
            if (!state.type) {
                state.type = localStorage.getItem('type')
            }
            return state.type;

        },

    },
    mutations: {
        //格式：类型(名字)+处理函数
        //加1
        changetype(state, type) {
            console.log(state, type) //state对象
            state.type = type;
        },
        changeOrgan(state, organ){
            console.log(state, organ) //state对象
            state.organ = organ;
        }
    },
    actions: {
        /* increment({commit}){
           commit("INCREMENT")
         }*/
    }
})

export default store
