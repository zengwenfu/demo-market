const host = 'https://dm.facemagic888.com';
const hostMock = 'http://localhost:3000/mock';
const concatUrl = (url) => `${host}${url}`;
const concatMockUrl = (url) => `${hostMock}${url}`;

const mockUrls = [
    // 'getUserInfoApi',
    'queryHomeListApi'
];

export default {
    // 获取用户信息 url
    getUserInfoApi () {
        if (mockUrls.indexOf('getUserInfoApi') > -1) {
            return concatMockUrl('/getUserInfo.json');
        }
        return concatUrl('/user/userinfo');
    },
    // 获取首页列表信息 url
    queryHomeListApi () {
        if (mockUrls.indexOf('queryHomeListApi') > -1) {
            return concatMockUrl('/queryHomeList.json');
        }
        return concatUrl('/home/homelist');
    }
};
