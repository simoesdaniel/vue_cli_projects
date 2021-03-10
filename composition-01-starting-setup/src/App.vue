<template>
  <section class="container">
    <h2>{{ uti1.uName }}</h2>
    <h2>{{ uti1.uAge }}</h2>
  </section>
</template>

<script>
import { ref, reactive } from 'vue';
export default {
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },
  setup() {
    // reactive ref value
    // uName = ref('Luis Simoes');
    // ref is used for single vars or consts
    // reactive is a just like refs but specific to deal with objects
    const user = ref({ uName: 'Luis Simoes', uAge: 31 });
    const user1 = reactive({ uName: 'Luis Simoes', uAge: 31 });

    setTimeout(() => {
      // uName.value = 'Daniel Santos';
      user1.uName = 'Daniel Santos';
      user1.uAge = 32;
    }, 2000);
    return { uti1: user1, uti: user };
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

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
