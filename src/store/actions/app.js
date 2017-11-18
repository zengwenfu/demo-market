import types from '../types/app';
import apiConfig from '../../utils/apiConfig';
import request from '../../utils/request';

export async function initStatus ({ commit }, status) {
    commit(types.INIT_STATUS, status);
}

export async function setUserInfo ({ commit }, status) {
    const url = apiConfig.getUserInfoApi();
    const res = await request(url) || {};
    if (res.code === '0000') {
        commit(types.SET_USER_INFO, res.data);
    }
    return res;
}
