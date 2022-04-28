import Vue from 'vue'
import Vuex from 'vuex'

import {dataSection} from '../assets/data'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allSection: [],
  },
  getters: {
  },
  mutations: {
    setDataSection(state, payload) {
      state.allSection = payload;
    }
  },
  actions: {
    getDataSection(store){
      store.commit('setDataSection', dataSection.section);
      console.log(dataSection);
    }
  },
  modules: {
  }
})
