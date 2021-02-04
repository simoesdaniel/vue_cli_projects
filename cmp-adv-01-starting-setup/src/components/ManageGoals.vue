<template>
  <!-- from vue 2 to vue 3 it was removed the concept of main element wrapper for each vue  
the representation below has been name fragments. A bunch of html root elements for the component-->
  <h2>Manage Goals</h2>
  <input type="text" ref="goal" />
  <button @click="setGoal">Set this goal</button>
  <!-- teleport allows to move a part of the dom to another location on it 
    using simple css selectors -->
  <teleport to="body">
    <error-alert v-if="inputIsInvalid">
      <template #default>
        <h2>Input is Invalid</h2>
        <p>You should insert a goal name</p>
        <button @click="dismissError">Dismiss</button>
      </template>
    </error-alert>
  </teleport>
</template>

<script>
import ErrorAlert from "./ErroAlert";
export default {
  components: {
    ErrorAlert: ErrorAlert,
  },
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    setGoal() {
      const enteredValue = this.$refs.goal.value;
      if (enteredValue === "") {
        this.inputIsInvalid = true;
      }
    },

    dismissError() {
      this.inputIsInvalid = false;
    },
  },
};
</script>
