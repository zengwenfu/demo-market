
import Vuex from 'vuex';

import App from './components/home/home.vue';

// 引入 module
import homeState from './store/modules/home';
// 引入 action
import * as homeActions from './store/actions/home';

// 创建 store
const store = new Vuex.Store({
    modules: {
        homeState
    },
    actions: {
        ...homeActions
    }
});

const Vue = window.Vue || {};
new Vue(Vue.util.extend({ el: '#root', store }, App));
