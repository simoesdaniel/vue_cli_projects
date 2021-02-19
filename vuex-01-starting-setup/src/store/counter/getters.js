const getters = {
  testAuth(state, getters, rootState, rootGetters) {
    return rootGetters.isLoggedIn;
  },
  finalCounter(state) {
    return state.count * 3;
  },
  normalizedCounter(_, getters) {
    const finalCounter = getters.finalCounter;
    if (finalCounter < 0) {
      return 0;
    } else if (finalCounter > 100) {
      return 100;
    }

    return finalCounter;
  }
};

export default getters;
