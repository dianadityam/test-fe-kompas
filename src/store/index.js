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
    itemList : [],
    currentDate: new Date(),
    currentMonth: '',
  },
  getters: {
    itemListData(state) {
      return state.itemList
    },
    getCurrentDay(state) {
      return state.currentDate.getDate()
    },
    getCurrentMonth(state) {
      return state.currentMonth
    },
    getCurrentYear(state) {
      return state.currentDate.getFullYear()
    },
    convertMonthIdn: (state) => (val) => {
      let bulan = val.getMonth();
      switch(bulan) {
        case 0: bulan = "Januari"; break;
        case 1: bulan = "Februari"; break;
        case 2: bulan = "Maret"; break;
        case 3: bulan = "April"; break;
        case 4: bulan = "Mei"; break;
        case 5: bulan = "Juni"; break;
        case 6: bulan = "Juli"; break;
        case 7: bulan = "Agustus"; break;
        case 8: bulan = "September"; break;
        case 9: bulan = "Oktober"; break;
        case 10: bulan = "November"; break;
        case 11: bulan = "Desember"; break;
       }
       return bulan;
    },
  },
  mutations: {
    assignItemList(state, data) {
      state.itemList = data
    },
    setMonthText(state, val) {
      state.currentMonth = val
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

    // post items data
    addItems(context, data) {
      config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      return new Promise((resolve, reject) => {
        axios.post(`/items`, data, config)
          .then(response => {
            resolve(response.data)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  },
})
