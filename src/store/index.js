import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userChoiceImg : "",
    compChoiceImg : "",
    tie : 0,
    win : 0,
    compWin : 0,
    loss : 0,
    compLoss : 0,
  },
  mutations: {
    userChoice : function(state,srcUrl){
      state.userChoiceImg = srcUrl;
      console.log(state.userChoiceImg);
    },
    compChoice : function(state,srcUrl){
      state.compChoiceImg = srcUrl;
      console.log(state.compChoiceImg);
    },
    scoreKeeper( state, option ,a ){
      //a is the computer generated choice(in ComputerComp) and option is the user choice( in UserComp)
      // wasnt sure how/if i could get those params passed from the components.
      //The userChoiceImg and compChoiceImg are url links not strings i need to compare...hope my efforts are worth something
      if ( option === a){
          state.tie = +1;
      }else if (option == 'rock' && a == 'paper'){
          state.compWin = +1
          state.loss = +1
      }else if (option == 'paper' && 'rock'){
          state.win = +1
          state.compLoss = +1
      }else if (option == 'rock' && a == 'scissors'){
          state.win = +1
          state.compLoss = +1
      }else if (option == 'scissors' && a == 'rock'){
          state.compWin = +1
          state.loss = +1
      }else if (option == 'scissors' && a == 'paper'){
          state.win = +1
          state.compLoss = +1
      }else if (option == 'paper' && a == 'scissors'){
          state.compWin = +1
          state.loss = +1
      }
  }
  },
  actions: {

  },
  getters: {
  }
})
