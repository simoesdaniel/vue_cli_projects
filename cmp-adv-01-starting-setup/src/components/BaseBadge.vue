<template>
  <span class="badge" :class="classes">{{ caption }}</span>
</template>

<script>

export default {
  props: ['type', 'caption'],
  computed: {
    classes() {
      return {
        'badge--admin': this.type === 'admin',
        'badge--author': this.type === 'author',
      };
    },
  },
};
</script>

// style scoped determines that this styling is fixed to this component and
cannot affect or be affected by other component stylings
<style lang="css" scoped>
.badge {
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  background-color: #ccc;
  color: #2e2e2e;
}

.badge--admin {
  background-color: #810036;
  color: white;
}

.badge--author {
  background-color: #002c8a;
  color: white;
}
</style>