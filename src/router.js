import VueRouter from 'vue-router';
import Vue from 'vue';
import MainPage from './pages/MainPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: MainPage,
  },
  {
    path: '/photo',
    component: () => import('./pages/PhotosPage.vue'),
  },
];

export default new VueRouter({
  mode: 'history',
  routes,
});
