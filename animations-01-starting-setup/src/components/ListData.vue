<template>
  <transition-group tag="ul" name="user-list">
    <li v-for="user in users" :key="user" @click="removeUser(user)">
      {{ user }}
    </li>
  </transition-group>
  <div>
    <input type="text" ref="userNameInput" />
    <button @click="addUser">Add User</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: ['Daniel', 'Luis', 'Simoes']
    };
  },
  methods: {
    addUser() {
      this.users.unshift(this.$refs.userNameInput.value);
    },
    removeUser(user) {
      this.users = this.users.filter(item => item !== user);
    }
  }
};
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
li {
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
}
.user-list-leave-from {
  opacity: 1;
  transform: translateX(0);
}
/* for transition group, on the leave-active vue special class 
we need to add a position absolute to ease the transition */
.user-list-leave-active {
  transition: all 0.3s ease-in;
  position: absolute;
}
.user-list-leave-to {
  opacity: 0;
  transform: translateX(50px);
}

.user-list-enter-from {
  opacity: 0;
  transform: translateX(-50px);
}
.user-list-enter-active {
  transition: all 0.3s ease-out;
}
.user-list-enter-to {
  opacity: 1;
  transform: translateX(0);
}
/* this class is injected by vue specifically for transition-group component
 on a side note, this special vue css class uses transform for it's animation */
.user-list-move {
  transition: transform 0.8s ease;
}
</style>
