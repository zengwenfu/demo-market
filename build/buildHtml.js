const nunjucks = require('nunjucks');
const path = require('path');
const fs = require('fs');

/* 创建文件
 * @param root 保存的路径
 * @param content 文件内容
 */
function createFile (root, content) {
    var pathArr = root.split('/');
    var dirPath = pathArr.slice(0, pathArr.length);
    for (var i = 0; i < dirPath.length; i++) {
        var p = path.resolve(dirPath.slice(0, i).join('/'));
        if (dirPath[i] && !fs.existsSync(p)) {
            fs.mkdirSync(p, '0777');
        }
    }
    fs.writeFileSync(path.resolve(root), content, {});
}

module.exports = function (target, bundleName) {
    var htmlTemplate = new nunjucks.Environment(new nunjucks.FileSystemLoader(path.resolve(__dirname)));
    const content = htmlTemplate.render('view.tpl', {
        bundleUrl: `${bundleName}.js`
    });
    createFile(`${target}/${bundleName}.html`, content);
};
