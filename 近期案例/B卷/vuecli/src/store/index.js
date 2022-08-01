import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tslist:[]
  },
  mutations: {
    addsj(state,obj){
      state.tslist.push(obj)
    },
    ykw1(state,index){
      state.tslist[index].static = 1
    },
    sc1(state,index){
      state.tslist.splice(index,1)
    },
    zkyb1(state,index){
      state.tslist[index].static = 0
    }
  },
  actions: {},
  modules: {}
})