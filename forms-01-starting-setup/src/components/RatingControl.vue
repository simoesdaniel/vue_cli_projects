<template>
  <ul>
    <li :class="{ active: activeOption === 'poor' }">
      <button type="button" @click="activate('poor')">Poor</button>
    </li>
    <li :class="{ active: activeOption === 'average' }">
      <button type="button" @click="activate('average')">Average</button>
    </li>
    <li :class="{ active: activeOption === 'great' }">
      <button type="button" @click="activate('great')">Great</button>
    </li>
  </ul>
</template>

<script>
export default {
  //special prop that enables custom components to be used inside a form capturing the value
  props: ['modelValue'],
  //special emmitter that vue awaits to receive from parent components
  emits: ['update:modelValue'],
  //   data() {
  //     return {
  //       activeOption: null
  //     };
  //   },
  computed: {
    activeOption() {
        return this.modelValue;
    }
  },
  methods: {
    activate(option) {
      this.$emit('update:modelValue', option);
    }
  }
};
</script>

<style scoped>
.active {
  border-color: rgb(121, 19, 121);
}

.active button {
  color: rgb(121, 19, 121);
}

ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}
li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
</style>
