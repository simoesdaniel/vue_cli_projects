<template>
  <button @click="increment">Add 1</button>
  <button @click="increaseOne({value: 3})">Increase 3</button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    // addOne() {
    //   this.$store.dispatch('increment');
    // },
    // increaseOne(amount) {
    //   //this.$store.commit('increase',{value:amount});
    //   this.$store.dispatch({
    //     type: 'increase',
    //     value: amount
    //   });
    // }
    ...mapActions({
      increment: 'increment',
      increaseOne: 'increase'
    })
  }
};
</script>

<style></style>
