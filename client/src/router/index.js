import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue';
import NewURL from '../views/NewURL.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/newURL',
    name: 'NewURL',
    component: NewURL,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
