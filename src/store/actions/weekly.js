import types from '../types/weekly';
import request from '../../utils/request';
import apiConfig from '../../utils/apiConfig';

export async function queryWeeklyList ({ commit }) {
    const url = apiConfig.queryWeeklyListApi();
    const data = await request(url) || {};
    commit(types.QUERY_WEEKLY_LIST, data.list);
}

export async function queryWeeklyDetail ({ commit }) {
    const url = apiConfig.queryWeeklyDetail();
    const data = await request(url) || {};
    commit(types.QUERY_WEEKLY_DETAIL, data);
}

export function setWeeklyTitle ({ commit }, title) {
    commit(types.SET_WEEKLY_TITLE, title);
}
