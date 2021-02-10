<template>
  <button @click="saveChanges()">Confirm</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem
  },
  inject: ['users'],
  data() {
    return {
      changesSaved: false,
    }
  },
  methods: {
    confirmInput() {
      this.$router.push('/teams');
    },
    saveChanges(){
      this.changesSaved =true;
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log('usersList beforeRouteEnter');
    console.log(to, from);
    next();
  },
  beforeRouteLeave (to, from, next) {
    console.log('userList beforeRouteLeave');
    console.log(to,from,this.saveChanges);
    if(this.changesSaved){
      next();
    }else{
      const userOption = confirm('Are you sure?')
      next(userOption);
    }
    //next(false);
  }
  
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
