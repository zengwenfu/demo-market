import types from '../types/home';

// 初始状态
const state = {
    list: []
};

// mutations
const mutations = {
    [types.QUERY_HOME_LIST] (state, list) {
        state.list = list;
    }
};

export default {
    state,
    mutations
};
