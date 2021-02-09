import { createApp } from 'vue';
import {  } from 'vue-router';
import { TeamsList } from './components/teams/TeamsList';
import { UsersList } from './components/users/UsersList';

import App from './App.vue';

const router = createRouter({
  routes: [
    {
      path: 'teams',
      component: TeamsList
    },
    {
      path: 'users',
      component: UsersList
    }
  ],
  history: createWebHistory()
});

const app = createApp(App);

app.use(router);
app.mount('#app');
