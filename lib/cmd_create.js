var path = require('path');
var fse = require('fs-extra');

module.exports = function (dir, type) {
    dir = dir || '.';
    type = type || 'angular';

    if (type == 'angular'){
        //创建基本目录
        fse.mkdirsSync(path.resolve(dir, 'src'));
        fse.mkdirsSync(path.resolve(dir, 'build'));
        fse.mkdirsSync(path.resolve(dir, 'src'));
        fse.mkdirsSync(path.resolve(dir, 'src'));

        //复制模板文件
        var tplDir = path.resolve(__dirname, '../');
        fse.copySync(tplDir, dir);
    }

};