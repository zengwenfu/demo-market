const host = 'http://we.facemagic888.com';
const concatUrl = (url) => `${host}${url}`;

export default {
    // 获取用户信息 url
    getUserInfoApi () {
        return concatUrl('/user/userinfo');
    }
};
