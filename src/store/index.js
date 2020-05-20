import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    type: "111",
    organ: {
      title: "旅游大数据中心",
      type: "tourism",
    },
    msgData: [],
    model: null,
    isSlot: true,
    swiperIndex: 0,
  },
  getters: {
    getType: function (state) {
      if (!state.type) {
        state.type = localStorage.getItem("type");
      }
      return state.type;
    },
    getMsgData: function (state) {
      return state.msgData;
    },
    getIsSlot: function (state) {
      return state.isSlot;
    },
    getSwiperIndex(state) {
      return state.swiperIndex
    },
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
    changeMsgData(state, data) {
      state.msgData = data;
    },
    setIsSlot(state, isSlot) {
      state.isSlot = isSlot;
    },
    setSwiperIndex(state, index) {
      state.swiperIndex = index;
    },

  },
  actions: {
    changeMsgData({
      commit
    }, data) {
      commit("changeMsgData", data);
    },
    changeSwiperIndex({
      commit
    }, index) {
      commit('changeSwiperIndex', index)
    }
  },
  modules: {},
});