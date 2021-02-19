import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const store = {
  namespaced: true,
  state() {
    return { count: 0 };
  },
  mutations,
  actions,
  getters
};

export default store;
