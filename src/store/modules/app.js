import types from '../types/app';

// 初始状态
const state = {
    isLogin: false,
    userInfo: {}
};

// mutations
const mutations = {
    [types.INIT_STATUS] (state, status = {}) {
        // 有可能的状态
        const matchStatus = [
            'isLogin'
        ];
        // 传入的 key 匹配到 matchStatus 就赋值
        for (const key in status) {
            if (matchStatus.includes[key]) {
                state[key] = status[key];
            }
        }
    },
    [types.SET_USER_INFO] (state, userInfo) {
        state.userInfo = userInfo;
    }
};

export default {
    state,
    mutations
};
