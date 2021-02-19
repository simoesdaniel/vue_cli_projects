<template>
  <h3>{{ count }}</h3>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.getters.normalizedCounter;
    }
  }
};
</script>

<style></style>
