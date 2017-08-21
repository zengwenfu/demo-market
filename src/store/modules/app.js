import types from '../types/app';

// 初始状态
const state = {
    message: 'hello'
};

// mutations
const mutations = {
    [types.INIT_STATUS] (state, message) {
        state.message = message;
    }
};

export default {
    state,
    mutations
};
