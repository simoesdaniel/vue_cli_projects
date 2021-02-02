<template>
  <section>
    <form>
      <label for="id">ID</label>
      <input id="id" type="text" v-model="friend.id" />
      <br />
      <label for="name">Name</label>
      <input id="name" type="text" v-model="friend.name" />
      <br />
      <label for="phone">Phone Number</label>
      <input id="phone" type="text" v-model="friend.phone" />
      <br />
      <label for="email">Email Address</label>
      <input id="email" type="text" v-model="friend.email" />
      <br />
      <button @click.prevent="submitNewFriend">Add</button>
    </form>
  </section>
</template>

<script>
export default {
  emits: ["new-friend-contact"],
  data() {
    return {
      friend: {
        id: "",
        name: "",
        phone: "",
        email: "",
      },
    };
  },
  methods: {
    submitNewFriend() {

      this.$emit("new-friend-contact", this.friend);
      this.friend = {};
    },
  },
};
</script>

<style></style>
