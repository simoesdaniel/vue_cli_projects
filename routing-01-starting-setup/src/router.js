import { createRouter, createWebHistory } from 'vue-router';

import NotFound from './pages/NotFound';
import TeamsList from './pages/TeamsList';
import UsersList from './pages/UsersList';
import UsersFooter from './pages/UsersFooter';
import TeamMembers from './components/teams/TeamMembers';
import TeamsFooter from './pages/TeamsFooter';

const routes = [
    // this is the same as the path defined below
    {
      path: '/',
      component: TeamsList
    },
    {
      name: 'teams',
      path: '/teams',
      meta: {
        needsAuth: true,
      },
      components: {
        default: TeamsList,
        footer: TeamsFooter
      },
      children: [
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true
        }
      ]
    },
    {
      path: '/users',
      components: {
        default: UsersList,
        footer: UsersFooter
      },
      beforeEnter: (to, from, next) => {
        console.log('users beforeEnter');
        console.log(to, from);
        next();
      }
    },
    {
      name: '',
      // the path bellow catches all other not defined routes
      path: '/:pathMatch(.*)',
      component: NotFound
    }
  ];
  const router = createRouter({
    routes,
    history: createWebHistory(),
    linkActiveClass: 'active',
    //this is a helpfull feature to enhance the back of the browser and scrolling active
    //by using it we can place the user on the area before he/she was in
    //and we can send the user to a specific position of the page, each time he/she navigates to a different route
    scrollBehavior(_, _2, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      }
      return { top: 0, left: 0 };
    }
  });
  
  router.beforeEach((_, _2, next) => {
    //console.log(to, from);
    if(_.meta.needsAuth){
      console.log('needs auth!');
      next();
    }else{
      next();
    }
    
    //for instance, we could apply a rule in this guard
    //the rule could be that if a premise navigate is not reflected
    //it will always navigate to certain route
    // if (to.name === 'team-members') {
    //   next();
    // } else {
    //   next({ name: 'team-members', params: { teamId: 't2' } });
    // }
  });
  
  router.afterEach((to, from) => {
    // to and from are both route objects.
    // could be used to send data to the server, for instance persisting analytics data
    console.log(to, from);
  });

  export default router;