import Vue from 'vue'
import Vuex from 'vuex'
import juegos from './juegos'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    juegos
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

// el v for se crea en el tr style="{color:juego.color}
//<tr v-for="juego in juegos" :style="{color:juego.color}">