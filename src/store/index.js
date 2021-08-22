import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userChoiceImg : "",
    comoChoiceImg : "",
    selected : "",
    computerSelected : "",
  },
  mutations: {
    userChoice : function(state,srcUrl){
      state.userChoiceImg = srcUrl;
    },
    compChoice : function(state,srcUrl){
      state.compChoiceImg = srcUrl;
    }
  },
  actions: {

  },
  getters: {
  }
})
