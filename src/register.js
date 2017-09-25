/*
* @Author: duyangsen
* @Date:   2017-09-18 09:55:32
* @Last Modified by:   duyangsen
* @Last Modified time: 2017-09-19 12:44:26
*/

import Vuex from 'vuex';

import App from './components/register/register.vue';
import './assets/font/demo.css';

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

