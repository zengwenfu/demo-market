import types from '../types/weekly';
import request from '../../utils/request';
import apiConfig from '../../utils/apiConfig';

export async function queryWeeklyList ({ commit }) {
    const url = apiConfig.queryWeeklyListApi();
    const data = await request(url) || {};
    commit(types.QUERY_WEEKLY_LIST, data.list);
}
