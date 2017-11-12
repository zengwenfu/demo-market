import types from '../types/weekly';

// 初始状态
const state = {
    list: [],
    detail: [],
    weeklyTitle: '菲麦前端周刊'
};

// mutations
const mutations = {
    [types.QUERY_WEEKLY_LIST] (state, list) {
        state.list = list;
    },
    [types.QUERY_WEEKLY_DETAIL] (state, data) {
        state.detail = data;
    },
    [types.SET_WEEKLY_TITLE] (state, title) {
        state.weeklyTitle = title;
    }
};

export default {
    state,
    mutations
};
