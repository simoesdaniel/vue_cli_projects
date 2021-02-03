<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <!-- scoped slot usage and shorthand for default slot template usage -->
    <course-goals #default="slotProps">
        <h2>
          {{ slotProps.item }}
        </h2>
        <p>{{ slotProps.anotherProp }}</p>
    </course-goals>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader";
import BadgeList from "./components/BadgeList";
import UserInfo from "./components/UserInfo";
import CourseGoals from "./components/CourseGoals";
export default {
  components: {
    TheHeader: TheHeader,
    BadgeList: BadgeList,
    UserInfo: UserInfo,
    CourseGoals: CourseGoals,
  },
  data() {
    return {
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
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
