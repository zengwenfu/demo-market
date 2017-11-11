const host = DEV ? 'http://localhost:3000/mock' : 'https://dm.facemagic888.com';

const concatUrl = (url) => `${host}${url}`;

/**
 *  在此处配置请求 url 就可以
 *  dev 配置开发环境 mock
 *  prd 配置生产环境 数据
 */
let urls = {
    dev: {
        getUserInfoApi: '/getUserInfo.json',
        queryHomeListApi: '/queryHomeList.json',
        queryWeeklyListApi: '/queryWeeklyList.json'
    },
    prd: {
        getUserInfoApi: '/user/userinfo',
        queryHomeListApi: '/home/homelist'
    }
};

if (DEV) {
    urls = urls.dev;
} else {
    urls = urls.prd;
}

const apis = {};
for (const key in urls) {
    apis[key] = () => {
        return concatUrl(urls[key]);
    };
}

export default apis;
