const host = 'http://localhost:5001';
const concatUrl = (url) => `${host}${url}`;

export default {
    // 获取用户信息 url
    getUserInfoApi () {
        return concatUrl('/user/userinfo');
    }
};
