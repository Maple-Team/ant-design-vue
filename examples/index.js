import 'babel-polyfill';
import Vue from 'vue';
import App from './App.vue';
import Antd from '../';
import 'ant-design-vue/style.js';

Vue.use(Antd);

new Vue({
  el: '#app',
  render: h => h(App),
});
