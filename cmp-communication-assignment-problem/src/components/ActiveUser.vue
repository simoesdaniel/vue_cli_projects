<template>
  <div>
    <h2> {{ activeUserName }}</h2>
    <h3> {{ activeUserAge }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    activeUserName: {
      type: String,
      required: true,
    },
    activeUserAge: {
      type: String,
      required: true,
    },
  },
  beforeCreate() {
      console.log(this.activeUserName);
  },
};
</script>

<style></style>
