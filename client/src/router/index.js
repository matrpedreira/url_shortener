import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue';
import URLManager from '../views/URLManager.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/urls',
    name: 'URLManager',
    component: URLManager,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
