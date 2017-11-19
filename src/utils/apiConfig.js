const host = {
    'dev': 'http://localhost:3000/mock',
    'stg': 'http://localhost:5001',
    'production': 'http://dm.facemagic888.com'
}[ENV];

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
        queryWeeklyListApi: '/queryWeeklyList.json',
        queryWeeklyDetail: '/queryWeeklyDetail.json'
    },
    prd: {
        loginApi: '/user/login',
        getUserInfoApi: '/user/userinfo',
        registerApi: '/user/register',
        captchaApi: '/user/captcha',
        decipherApi: '/user/decipher',
        checkCaptchaApi: '/user/checkCaptcha',
        queryHomeListApi: '/home/homelist',
        queryWeeklyListApi: '/weekly/findWeeklys',
        queryWeeklyDetail: '/weekly/findById',
        saveOrUpdateWeeklyApi: '/weekly/admin/saveOrUpdate',
        queryUnPub: '/weekly/admin/findUnPub',
        publishWeekly: '/weekly/admin/publish',
        downloadWeekly: '/weekly/admin/download'
    }
};

if (ENV === 'dev') {
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
