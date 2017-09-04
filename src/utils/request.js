import ajax from './ajax';

export default function (url, data = {}, type = 'GET') {
    return new Promise(resolve => {
        ajax(type, url, data, (res) => {
            res = JSON.parse(res);
            resolve(res);
        }, (status) => {
            resolve({
                code: status
            });
        });
    });
}
