var path = require('path');
var fse = require('fs-extra');
var fs = require('fs');


module.exports = function (dir, type) {
    dir = dir || '.';
    type = type || 'angular';
    console.log(dir, type);

    //验证type是否正确
    if (type !== 'angular' && type !== 'react') {
        console.error('type is void');
    }



        //复制初始化文件
        var configDir = path.resolve(__dirname, '../template/config/' + type);
        fse.copySync(configDir, dir);

        //创建基本目录
        fse.mkdirsSync(path.resolve(dir, 'src'));
        fse.mkdirsSync(path.resolve(dir, 'build'));

        //复制模板文件
        var tplDir = path.resolve(__dirname, '../template/' + type);
        fse.copySync(tplDir, dir + "/src");

    //var webpack = require(path.resolve(dir, 'webpack.config'));
    //var pkg = require(path.resolve(dir, 'package'));
    //console.log(webpack, pkg);

    /**
     * 修改package.json文件
     * @param pkg 传入package稳健
     * @param option 传入配置参数
     */

    function modifiedPackage (pkg, option) {

    }

    /**
     * 修改webpack.config.js文件
     * @param webpack 传入的webpack.config.js
     * @param option 传入的配置参数
     */
    function modifiedWebpack (webpack, option) {

    }

    /**
     * 读取文件
     * @param name 文件名称
     * @returns {*}
     */
    function loadFile (name) {
        return fs.readFileSync(path.join(__dirname, '..', 'template', name), 'utf-8');
    }

};