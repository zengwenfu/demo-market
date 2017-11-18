
import Vuex from 'vuex';

import App from 'components/pages/weekly/weekly-admin.vue';

// 引入 module
import weeklyState from './store/modules/weekly';
import appState from './store/modules/app';
// 引入 action
import * as appActions from './store/actions/app';
import * as weeklyActions from './store/actions/weekly';

// 创建 store
const store = new Vuex.Store({
    modules: {
        weeklyState,
        appState
    },
    actions: {
        ...weeklyActions,
        ...appActions
    }
});

const Vue = window.Vue || {};

Vue.config.devtools = true;
new Vue(Vue.util.extend({ el: '#root', store }, App));
