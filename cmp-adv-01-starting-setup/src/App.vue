<template>
  <div>
    <the-header></the-header>
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
    <!-- <active-goals v-if="selectedComponent === 'active-goals'"></active-goals>
    <manage-goals v-else-if="selectedComponent === 'manage-goals'"></manage-goals> -->

    <!-- a way to load components dynamically -->
    <!-- keep alive does a kind of caching the current state of each component -->
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader";
// import BadgeList from "./components/BadgeList";
// import UserInfo from "./components/UserInfo";
// import CourseGoals from "./components/CourseGoals";
import ActiveGoals from "./components/ActiveGoals";
import ManageGoals from "./components/ManageGoals";

export default {
  components: {
    TheHeader: TheHeader,
    ManageGoals: ManageGoals,
    ActiveGoals: ActiveGoals,
  },
  data() {
    return {
      selectedComponent: "active-goals",
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    setSelectedComponent(cmp) {
      this.selectedComponent = cmp;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
