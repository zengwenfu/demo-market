import types from '../types/home';
import request from '../../utils/request';
import apiConfig from '../../utils/apiConfig';

export async function queryHomeList ({ commit }) {
    const url = apiConfig.queryHomeListApi();
    const data = await request(url) || {};
    commit(types.QUERY_HOME_LIST, data.list);
}
