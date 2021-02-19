<template>
  <base-container title="Vuex" v-if="isLoggedIn">
    <the-counter></the-counter>
    <button @click="addOne">Add 1</button>
    <change-counter></change-counter>
    <favorite-value></favorite-value>
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter';
import FavoriteValue from './components/FavoriteValue';
import ChangeCounter from './components/ChangeCounter.vue';
import UserAuth from './components/UserAuth.vue';
import { mapGetters } from 'vuex';
export default {
  components: {
    BaseContainer,
    TheCounter,
    FavoriteValue,
    ChangeCounter,
    UserAuth
  },

  methods: {
    addOne() {
      this.$store.state.count = this.$store.state.count + 11;
    }
  },
  computed:{
    ...mapGetters(['isLoggedIn']),
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
