
import Vuex from 'vuex';

import App from './components/app.vue';

// 引入 module
import appState from './store/modules/app';
// 引入 action
import * as appActions from './store/actions/app';

// 创建 store
const store = new Vuex.Store({
    modules: {
        appState
    },
    actions: {
        ...appActions
    }
});

const Vue = window.Vue || {};
new Vue(Vue.util.extend({ el: '#root', store }, App));
