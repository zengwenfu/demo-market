import 'css/common.less';
import mainTitlebar from 'components/titlebar/main-titlebar.vue';
import weeklyTitlebar from 'components/titlebar/weekly-titlebar.vue';

const Vue = window.Vue || {};

const components = {
    'main-titlebar': mainTitlebar,
    'weekly-titlebar': weeklyTitlebar
};

for (const key in components) {
    Vue.component(key, components[key]);
}
