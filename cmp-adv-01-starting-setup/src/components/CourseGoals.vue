<template>
  <ul>
      <li v-for="goal in goals" :key="goal">
          <!-- this is a scoped slot -->
          <slot :item="goal" anotherProp="..."></slot>
      </li>
  </ul>
</template>

<script>
/** Customizable slots [SCOPED SLOTS] */
export default {
  data() {
    return {
      goals: ["finish the course", "learn vue"],
    };
  },
};
</script>

<style></style>
