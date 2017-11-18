import types from '../types/weekly';
import request from '../../utils/request';
import apiConfig from '../../utils/apiConfig';

export async function queryWeeklyList ({ commit }) {
    const url = apiConfig.queryWeeklyListApi();
    const res = await request(url) || {};
    if (res.code === '0000') {
        commit(types.QUERY_WEEKLY_LIST, res.data);
    }
}

export async function queryWeeklyDetail ({ commit }, { id }) {
    let res;
    // 如果传了 id 根据 id 查询
    if (id) {
        const url = apiConfig.queryWeeklyDetail();
        res = await request(url, { id }) || {};
    } else { // 查询未发布
        const url = apiConfig.queryUnPub();
        res = await request(url) || {};
    }
    if (res.code === '0000') {
        // 未传入id 未查询到未发布，定义默认栏目
        if (!id && (!res.data || !res.data._id)) {
            res.data = res.data || {};
            res.data.columns = [{
                name: '菲麦自研',
                articles: []
            }, {
                name: '前沿资讯',
                articles: []
            }];
        }
        commit(types.QUERY_WEEKLY_DETAIL, res.data);
    }
}

export function setWeeklyTitle ({ commit }, title) {
    commit(types.SET_WEEKLY_TITLE, title);
}

export async function saveOrUpdate ({ commit, dispatch }, params) {
    const url = apiConfig.saveOrUpdateWeeklyApi();
    const res = await request(url, params, 'POST') || {};
    commit(types.QUERY_WEEKLY_DETAIL, res.data);
}

export function setColumnEditIndex ({ commit }, index) {
    commit(types.SET_COLUMN_EDIT_INDEX, index);
}

export async function publishWeekly ({ commit }, id) {
    const url = apiConfig.publishWeekly();
    const params = {
        data: JSON.stringify({ id })
    };
    const res = await request(url, params, 'POST') || {};
    return res;
}
