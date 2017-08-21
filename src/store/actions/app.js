import types from '../types/app';

export function initStatus ({ commit }, message) {
    commit(types.INIT_STATUS, message);
}
