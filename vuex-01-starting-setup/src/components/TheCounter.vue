<template>
  <h3>{{ finalCounter }}</h3>
  <h4>{{ testAuth }}</h4>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    // count() {
    //   return this.$store.getters.finalCounter;
    // }
    ...mapGetters(['counter/finalCounter', 'counter/testAuth'])
  }
};
</script>

<style></style>
