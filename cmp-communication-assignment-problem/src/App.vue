<template>
  <section>
    <div class="col-6">
      <active-user
        :active-user-name="user.name"
        :active-user-age="user.age"
      ></active-user>
    </div>
    <div class="col-6">
      <user-data
        :user-name="user.name"
        :user-age="user.age"
        @update-user-data="updateActiveUserData"
      ></user-data>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        age: "",
      },
    };
  },
  methods: {
    updateActiveUserData(newUser) {
      this.user = newUser;
    },
  },
};
</script>

<style>
section {
  width: 960px;
  margin: 0 auto;
}

.col-6 {
  width: 50%;
  float: left;
}

#app form > * {
  display: inline-block;
  min-width: 50%;
}
</style>
