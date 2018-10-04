import Vue from 'vue';
import Main from './app/Main.vue';

import './index.scss';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import SvgIcon from 'vue-svgicon';

// Default tag name is 'svgicon'
Vue.use(SvgIcon, {
  tagName: 'svgicon'
});

import './compiled-icons';

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      components: {
        default: Main
      }
    }
  ]
});

export default new Vue({
  el: '#root',
  router,
  render: h => h('router-view')
});
