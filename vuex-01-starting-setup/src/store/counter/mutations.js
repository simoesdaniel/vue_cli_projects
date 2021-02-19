const mutations = {
  increment(state) {
    state.count = state.count + 2;
  },
  increase(state, payload) {
    console.log(state);
    state.count = state.count + payload.value;
  }
};

export default mutations;
