import types from '../types/weekly';

// 初始状态
const state = {
    list: []
};

// mutations
const mutations = {
    [types.QUERY_WEEKLY_LIST] (state, list) {
        state.list = list;
    }
};

export default {
    state,
    mutations
};
