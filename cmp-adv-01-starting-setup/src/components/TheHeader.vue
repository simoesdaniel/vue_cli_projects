<template>
  <header>
    <h1>More on Vue Components</h1>
  </header>
</template>

// style scoped determines that this styling is fixed to this component and
cannot affect or be affected by other component stylings
<style lang="css" scoped>
header {
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #14005e;
}

header h1 {
  color: white;
  margin: 0;
}
</style>
