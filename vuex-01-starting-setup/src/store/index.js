import { createStore } from 'vuex';
import counterModule from './counter/index';
import authModule from './auth';

const store = createStore({
  modules: {
    counter: counterModule,
    auth: authModule
  },
  state() {},
  mutations: {},
  actions: {},
  getters: {}
});

export default store;