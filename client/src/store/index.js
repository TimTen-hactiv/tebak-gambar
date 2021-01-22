import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    players: [],
    fetchQuestion: []
  },
  mutations: {
    insertNickname (state, payload) {
      state.players.push(payload)
    },
    SOCKET_questions (state, payload) {
      state.fetchQuestion = payload
    }
  },
  actions: {
  }
})
