import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.baseURL = 'http://localhost:3000';

Vue.use(Vuex)

let config = {
  headers: {
    'Content-Type': 'application/json'
  }
}

export default new Vuex.Store({
  state: {
    itemList : []
  },
  getters: {
    itemListData(state) {
      return state.itemList
    }
  },
  mutations: {
    assignItemList(state, data) {
      state.itemList = data
    }
  },
  actions: {
    //get items data
    getItemList(context, paramsQ) {
      config = {
        params : paramsQ,
        headers: {
          'Content-Type': 'application/json',
        },
      }
      return new Promise((resolve, reject) => {
        axios.get(`/items`, config)
          .then(response => {
            resolve(response.data)
            context.commit('assignItemList', response.data)

          })
          .catch(error => {
            reject(error)
          })
      })
    },
  },
})
