import { createRouter, createWebHistory } from 'vue-router';
import AllUsers from './pages/AllUsers.vue';
import CourseGoals from './pages/CourseGoals.vue';

const routes = [
  {
    path: '/',
    component: AllUsers
  },
  {
    path: '/goals',
    component: CourseGoals
  }
];

const router = createRouter({
  routes,
  history: createWebHistory()
});

export default router;
