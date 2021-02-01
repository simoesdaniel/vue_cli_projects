<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "(*)" : "" }}</h2>
    <button @click="toggleDetails()">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <button @click="toggleFavorite()">
      {{ isFavorite ? "Remove" : "Add" }} Favorite
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  //props: ["name", "phoneNumber", "emailAddress","isFavorite"],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: Number,
    emailAddress: String,
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: ['toggle-friend-favorite'],
  /*emits: {
    'toggle-friend-favorite': function (id) {
      if(id){
        return true;
      }else{
        console.warn('Id is missing');
        return false;
      }
    }
  },*/
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit("toggle-friend-favorite", this.id);
    },
  },
};
</script>

<style></style>
