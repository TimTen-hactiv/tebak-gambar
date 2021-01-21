import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    players: []
  },
  mutations: {
    insertNickname (state, payload) {
      state.players.push(payload)
    }
  },
  actions: {
  }
})
