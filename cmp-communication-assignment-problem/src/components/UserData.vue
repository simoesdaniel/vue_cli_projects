<template>
  <div>
    <form>
      <label for="name">Active user name</label>
      <input type="text" v-model="user.name" />
      <label for="age">Active user age</label>
      <input type="text" v-model="user.age" />
      <button @click.prevent="updateUser">Update</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    userName: {
      type: String,
      required: true,
    },
    userAge: {
      type: String,
      required: true,
    },
  },
  emits: ["update-user-data"],
  data() {
    return {
      user: {
        name: this.userName,
        age: this.userAge,
      },
    };
  },
  methods: {
    updateUser() {
      this.$emit("update-user-data", this.user);
    },
  },
};
</script>

<style></style>
