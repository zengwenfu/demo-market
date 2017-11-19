
import Vuex from 'vuex';
import VueRouter from 'vue-router';

import App from 'components/pages/weekly/weekly.vue';
import WeeklyDetail from 'components/pages/weekly/weekly-detail.vue';
import WeeklyList from 'components/pages/weekly/weekly-list.vue';

// 引入 module
import weeklyState from './store/modules/weekly';
// 引入 action
import * as weeklyActions from './store/actions/weekly';

const routes = [
    { path: '/detail/:id', component: WeeklyDetail },
    { path: '/', component: WeeklyList }
];

const router = new VueRouter({
    routes
});

// 创建 store
const store = new Vuex.Store({
    modules: {
        weeklyState
    },
    actions: {
        ...weeklyActions
    }
});

const Vue = window.Vue || {};

Vue.config.devtools = true;
new Vue(Vue.util.extend({ el: '#root', store, router }, App));
