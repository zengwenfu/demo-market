import types from '../types/app';
import request from '../../utils/request';
import apiConfig from '../../utils/apiConfig';

export async function initStatus ({ commit }, message) {
    const url = apiConfig.getUserInfoApi();
    const userinfo = await request(url);
    commit(types.INIT_STATUS, message + ':' + JSON.stringify(userinfo));
}
